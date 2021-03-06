import { mongo } from "../mongo/mongo.js";
import { ObjectId } from 'mongodb';
import { sendMail } from "../mongo/sendMail.js";
const helper={
//create a new order
 async postOrder(req,res) {
  try {
    const {
      userEmail,
      paymentData,
      products
    } = req.body;
   const order = { ...req.body, createdAt: new Date() }
    const newOrder = await mongo.orders.insertOne(order);
    //Order confirmation mail to the intended user
    await sendMail(userEmail, "Order Confirmation", `<p>Your order with OrderId ${paymentData.order_id} has been successfully placed.</p>
<br>
<p>Products Ordered:</p>
<p>${products.map((product) => product.name).join(" and ")}</p>
<br>
<p>Total Amount Paid: ₹ ${paymentData.amount / 100}</p>
<p>Your Payment ID: ${paymentData.id}</p>
<br>
<p>Your order will be shipped soon and confirmation of that will be sent to your mail!
Happy Shopping at Shoptronics!</p>
`)
   res.status(201).send(newOrder);
  }
  catch (err)
  {
   console.log("Error creating new order", err);
  res.status(500).send("Error occured")
  }
 },
 //specific user's orders -accessed by an user
 async getOrder(req, res) {
  try {
    const { userid } = req.params;
   const order = await mongo.orders.find({ userId: userid }).sort({createdAt:-1}).toArray();
   res.status(200).send(order)
  }
  catch (err)
  {
   console.log("Error getting order", err);
  res.status(500).send("Error occured")
  }
 },

//fetch all orders for admin
  async getAllOrders(req, res) {
  try {
   const { recent } = req.query;
   const orders = recent ?  await mongo.orders.find().limit(5).sort({createdAt:-1}).toArray() : await mongo.orders.find().sort({createdAt:-1}).toArray() ;
   res.status(200).send(orders)
  }
  catch (err)
  {
   console.log("Error getting order", err);
  res.status(500).send("Error occured")
  }
 },
//delete an order for admin
 async deleteOrder(req, res) {
  try {
    const { orderid } = req.params;
    const order = await mongo.orders.deleteOne({ _id: ObjectId(orderid) });
   res.status(200).send(order)
  }
  catch (err)
  {
   console.log("Error deleting order", err);
  res.status(500).send("Error occured")
  }
 },
//update order for admin
 async updateOrder(req, res) {
  try {
    const { orderid } = req.params;
    const updatedOrder = await mongo.orders.findOneAndUpdate({ _id: ObjectId(orderid) },{
      $set: req.body
    },{returnNewDocument:true})
   res.status(200).send(updatedOrder)
  }
  catch (err)
  {
   console.log("Error updating order", err);
  res.status(500).send("Error occured")
  }
 },
//get an  order for admin
 async getOrderById(req, res) {
  try {
    const { orderid } = req.params;
    const Order = await mongo.orders.findOne({ _id: ObjectId(orderid) });
   res.status(200).send(Order)
  }
  catch (err)
  {
   console.log("Error getting order", err);
  res.status(500).send("Error occured")
  }
 },





}

export {helper}