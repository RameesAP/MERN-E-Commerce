import UserModel from "../model/UserModel.js"



export const updateUser = async (req, res) => {
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedU=await UserModel.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatedU)
    } catch (error) {
        res.status(500).json(error)
    }
}