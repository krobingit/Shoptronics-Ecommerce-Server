import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

  const client = new MongoClient(process.env.MONGODB_URL);
const mongo={
 db: null,
  users: null,
  products:null,
  orders: null,
async connectDB()
{
 await client.connect();
 console.log("MongoDB Connected");
 this.db = client.db('Ecommerce');
  this.users = this.db.collection('users');
  this.products = this.db.collection('products');
  this.orders = this.db.collection('orders');
}
}
export {mongo};