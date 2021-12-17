import { mongo } from "../mongo/mongo.js";

//getData
const helper = {
  async getAllProducts(req, res) {
    const filter = req.query;
    const prods = await mongo.products.find(filter).toArray();
    res.send(prods);
  },
};
export {helper}