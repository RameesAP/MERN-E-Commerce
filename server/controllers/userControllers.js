


export const getall=async(req,res)=>{
    try {
        const alldata=await UserModel.find()
        res.status(200).json(alldata)
    } catch (error) {
        res.status(500).json(error)
    }
}