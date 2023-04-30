import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        desc: {
            type: String,
            require: true,
        },
        img: {
            type: String,
            require: true,
        },
        categories: {
            type: Array
        },
        size: {
            type: String
        },
        color: {
            type: String
        },
        price: {
            type: Number,
            require: true
        },
        date: {
            type: Date,
            default: Date.now

        }
    },
    { timestamps: true }
)

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel