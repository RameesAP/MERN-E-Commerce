import OrderModel from "../model/OrderModel.js"


export const createOrder = async (req, res) => {
    const newOrder = new OrderModel(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateCart = async (req, res) => {
    try {
        const updatedCart = await CartModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json(error)
    }

}


export const deleteCart = async (req, res) => {
    try {
        await CartModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart Deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUserCart = async (req, res) => {
    try {
        const Cart = await CartModel.findOne({ userId: req.params.userId })
        res.status(200).json(Cart)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllCart = async (req, res) => {
    try {
        const cart = await CartModel.find()
        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
}
