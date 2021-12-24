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
 //specific user's orders
 async getOrder(req, res) {
  try {

   const order = await mongo.orders.find({ userId: req.params.userid }).toArray();
   res.status(200).send(order)
  }
  catch (err)
  {
   console.log("Error getting order", err);
  res.status(500).send("Error occured")
  }

 }

}

export {helper}