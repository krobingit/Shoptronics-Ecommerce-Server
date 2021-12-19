import { mongo } from "../mongo/mongo.js";
import {ObjectId} from 'mongodb'
//getData
const helper = {
  async getAllProducts(req, res) {
    const filter = req.query;
    const prods = await mongo.products.find(filter).toArray();
    res.send(prods);
  },
  async getProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await mongo.products.findOne({ _id: ObjectId(id) })
      product ? res.send(product) : res.status(404).send({ Error: "Not Found" });
    }
    catch (err)
    {
      console.log("Error:"+err);
    }
  },
};
export {helper}