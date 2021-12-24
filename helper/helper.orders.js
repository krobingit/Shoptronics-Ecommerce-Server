import { mongo } from "../mongo/mongo.js"

const helper={

 async postOrder(req,res) {

  const order = { ...req.body, createdAt: new Date() }
  const newOrder = await mongo.orders.insertOne(order);
  res.status(201).send(newOrder);
 }

}

export {helper}