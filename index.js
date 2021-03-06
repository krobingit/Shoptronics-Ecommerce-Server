import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userauthRoute } from "./routes/userauth.js";
import { mongo } from "./mongo/mongo.js";
import { resetRoute } from "./routes/resetPassword.js";
import { productRoute } from "./routes/product.js";
import { paymentRoute } from "./routes/payment.js";
import { ordersRoute } from "./routes/orders.js";
import { usersRoute } from "./routes/users.js";
dotenv.config();

const app = express();
await mongo.connectDB();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Server running successfully");
});
app.use(cors());
app.use(express.json());
app.use("/userauth", userauthRoute);
app.use("/resetPassword", resetRoute);
app.use("/product", productRoute);
app.use("/razorpay", paymentRoute);
app.use("/order", ordersRoute);
app.use("/user", usersRoute);
app.listen(PORT, () =>
  console.log(`server running successfully on PORT ${PORT}`)
);
