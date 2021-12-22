import { mongo } from "../mongo/mongo.js";
import {ObjectId} from 'mongodb'

const helper = {
//getting all products
  async getAllProducts(req, res) {
    const filter = req.query;
    const prods = await mongo.products.find(filter).toArray();
    res.send(prods);
  },
  //getting a specificc product
  async getProductById(req, res) {
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