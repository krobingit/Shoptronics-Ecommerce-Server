import Razorpay from 'razorpay';
import shortid from 'shortid';

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
export const verification = async (req, res) => {
  console.log(req.body)
  razpay.payments.fetch(req.body.razorpay_payment_id).then((pay) => {
    if (pay.status === "captured") {
      console.log(pay)
      res.send({
        message: "Payment Success"
      })
    }
      else
      return false;

  }
)

  res.send({status:"ok"})

}

