import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config();

  const client = new MongoClient(process.env.MONGODB_URL);
const mongo={
 db: null,
  users: null,
  orders: null,
  cart: null,
 wishlist:null,
async connectDB()
{
 await client.connect();
 console.log("MongoDB Connected");
 this.db = client.db('Ecommerce');
  this.users = this.db.collection('users');
  this.products = this.db.collection('products');
  this.orders = this.db.collection('orders');
  this.cart = this.db.collection('cart');
  this.wishlist = this.db.collection('wishlist');
}
}
export {mongo};