import { mongo } from "../mongo/mongo.js"
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';
const helper = {
    //update existing user
async updateUser(req, res)
    {
        let { userid } = req.params;
  try {
           if(req.body.password)
            {
                req.body.password=await bcrypt.hash(req.body.password,Number(10))
            }
      const updatedUser = await mongo.users.findOneAndUpdate({ _id: ObjectId(userid) }, { $set: req.body }
          , { returnNewDocument: true })
      const user = await mongo.users.findOne({ _id: ObjectId(userid) });
          const { password, ...userdata } = user;
            res.status(200).send(userdata)
        }
        catch(err)
        {
            console.log("error in user updation",err)
            res.status(500).send(err)
        }
    },
//get all users for admin
    async getAllUsers(req, res)
    {
        const {recent
    } = req.query;
        try {
            const users = recent ? await mongo.users.find().limit(5).sort({createdAt:-1}).toArray() : await mongo.users.find().toArray();
            res.status(200).send(users)

        }
        catch (err)
        {
  console.log("error in fetching users",err)
            res.status(500).send(err)
        }
    },
//get specific user data for admin

    async getUser(req, res)
    {
        const { userid } = req.params;
        try {
            const user = await mongo.users.findOne({ _id: ObjectId(userid) })
            const { password, ...userdata } = user;
            res.status(200).send(userdata)
        }
        catch (err) {

          console.log("error in fetching user",err)
            res.status(500).send(err)

        }
    },

    //delete user-both admin and user access
       async deleteUser(req, res)
       {
           const { userid } = req.params;
        try {
            const result = await mongo.users.deleteOne({ _id: ObjectId(userid) })
 result.deletedCount > 0 ? res.send(result) : res.send({ message: "No user Found" });
        }
        catch (err) {

          console.log("Error in fetching user",err)
            res.status(500).send(err)

        }
    },


}


export {helper}