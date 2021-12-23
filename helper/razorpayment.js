import Razorpay from 'razorpay';
import shortid from 'shortid';
import request from 'request';

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
 payment_capture: 0
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
  /*
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
*/
 try{
    return request(
      {
        method : "POST",
        url : `https://${razpay.key_id}:${razpay.key_secret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form:{
          amount : req.body.amount,
          currency: req.body.currency
        },
      },
      async function(err,response,body){
        if(err){
          return res.status(500).json({
            message: "Something error!s"
          })
        }
        return res.status(200).json(body)
      }
    )
  }
  catch(err){
    return res.status(500).json({
      message: err.message
    })
  }
}