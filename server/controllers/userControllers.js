import UserModel from "../model/UserModel.js"


//update user
export const updateUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedU = await UserModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedU)
    } catch (error) {
        res.status(500).json(error)
    }
}

//delete User

export const deleteUser = async (req, res) => {

    try {
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted..!")
    } catch (error) {
        res.status(500).json(error)
    }
}

//get User
export const getUser = async (req, res) => {

    try {
        const user = await UserModel.findById(req.params.id)

        const { password, ...others } = user._doc

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
}

//getall User
export const getAllUser = async (req, res) => {
    const query = req.query.new
    try {
        const users = query
            ? await UserModel.find().sort({ _id: -1 }).limit(5)
            : await UserModel.find()

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get User stats

export const userStats = async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        const data = await UserModel.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}
