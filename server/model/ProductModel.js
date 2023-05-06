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
            type: Array
        },
        color: {
            type: Array
        },
        price: {
            type: Number,
            require: true
        },
        inStock:{
            type:Boolean,
            default:true
        }

    },
    { timestamps: true }
)

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel