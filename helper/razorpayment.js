import Razorpay from 'razorpay';
import shortid from 'shortid';
import crypto from 'crypto';

var razpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});
export const razorpay = async (req, res) => {
  const { total } = req.body;
 try {
  const response=await razpay.orders.create({
   amount:total*100,
   currency: "INR",
   receipt: shortid.generate(),
  })
  res.send(response)
 }
  catch(err)
  {
console.log(err)

  }

}
export const verification =  (req, res) => {

  /* razpay.payments.fetch(req.body.razorpay_payment_id)
    .then((pay) => { console.log(pay) })
*/
// do a validation
  const secret = 'leomessi';

	console.log(req.body)

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })

}