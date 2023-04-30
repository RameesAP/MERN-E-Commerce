import UserModel from "../model/UserModel.js";

export const register = async (req, res) => {
    const newUser = new UserModel(req.body)

    try {
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}