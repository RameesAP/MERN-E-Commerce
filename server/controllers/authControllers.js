import UserModel from "../model/UserModel.js";
import CryptoJS from "crypto-js";

export const register = async (req, res) => {
    const newUser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}

//LOGIN

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username })
        !user && res.status(401).json("user not found")

        const hashedpassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const OGpassword = hashedpassword.toString(CryptoJS.enc.Utf8)
        OGpassword !== req.body.password &&
            res.status(401).json("wrong password")

        const { password, ...others } = user._doc

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
}


