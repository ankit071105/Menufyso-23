import { UserForm } from "../models/form.js";

export const postForm = async(req,res)=>{
    const Title = req.body.titlee;
    const Price = req.body.pricee;
    const Table = req.body.tablee;
    try {
       await UserForm.create({title:Title,price:Price,table:Table})
       res.send({status:"ok"})
    } catch (error) {
        res.json({status:error});
    }
}