import Razorpay from 'razorpay';
import shortid from 'shortid';

var razpay = new Razorpay({
  key_id: 'rzp_test_2I9iqbhqh8BDIH',
  key_secret: '0OdSUw2C0dLoocSqjrFbKZE9',
});
export const razorpay = async (req, res) => {

  const { amount } = req.body;
 try {
  const response=await razpay.orders.create({
   amount,
   currency: "INR",
   receipt: shortid.generate(),
  })
  res.send({message:"OK",response})
 }
  catch(err)
  {
console.log(err)

  }



}