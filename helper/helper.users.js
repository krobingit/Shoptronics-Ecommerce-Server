import { mongo } from "../mongo/mongo.js"
import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';
const helper={
async updateUser(req, res)
 {
  try {
           if(req.body.password)
            {
                req.body.password=await bcrypt.hash(req.body.password,Number(12))
            }
            const updatedUser= await mongo.users.findOneAndUpdate({_id:ObjectId(req.params.userid)},{$set:req.body},{ returnNewDocument: true })
            res.status(200).send(updatedUser)
        }
        catch(err)
        {
            console.log("error in user updation",err)
            res.status(500).send(err)
        }
    }
}

export {helper}