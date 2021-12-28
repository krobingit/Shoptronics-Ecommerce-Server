import { mongo } from "../mongo/mongo.js";

const helper={
//create a new order
 async postOrder(req,res) {
  try {
   const order = { ...req.body, createdAt: new Date() }
   const newOrder = await mongo.orders.insertOne(order);
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

   const order = await mongo.orders.find({ userId: req.params.userid }).sort({createdAt:-1}).toArray();
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


  //update an order for admin




}

export {helper}