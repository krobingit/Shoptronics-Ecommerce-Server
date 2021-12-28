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
 async deleteProductById(req, res) {
    try {
      const { id } = req.params;
      const result = await mongo.products.deleteOne({ _id: ObjectId(id) })
     result.deletedCount > 0 ? res.send(result) : res.send({ message: "No user Found" });
    }
    catch (err)
    {
      console.log("Error in deleting Product"+err);
    }
  },
 async EditProductById(req, res) {
    try {
      const { id } = req.params;
       const res=await mongo.products.findOneAndUpdate({ _id: ObjectId(id) }, { $set: req.body }, { returnNewDocument: true })
      const updatedData = await this.getProductById();
res.status(200).send(updatedData);
    }
    catch (err)
    {
      console.log("Error in updating Product"+err);
    }
  },
};
export {helper}