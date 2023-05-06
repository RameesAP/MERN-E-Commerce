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

export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await OrderModel.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedOrder)
    } catch (error) {
        res.status(500).json(error)
    }

}


export const deleteOrder = async (req, res) => {
    try {
        await OrderModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Order Deleted...")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUserOrder = async (req, res) => {
    try {
        const Orders = await OrderModel.find({ userId: req.params.userId })
        res.status(200).json(Orders)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllOrder = async (req, res) => {
    try {
        const ALLOrder = await OrderModel.find()
        res.status(200).json(ALLOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get monthly income

export const getMonthlyIncome = async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
    try {
        const income = await OrderModel.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                }

            },
        ])
        res.status(200).json(income)
    } catch (error) {
        res.status(500).json(error)
    }
}