//  import stripe from "stripe"
//  const stripe = new stripe(process.env.STRIPE_KEY);

 import Stripe from 'stripe';
const stripe = Stripe(process.env.STRIPE_KEY);



export const stripePost = async (req,res)=>{
    stripe.charges.create({
        source:req.body.token,
        amount:req.body.amount,
        currency:"usd"
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr,"errrrrrrrrrrrrrr")
        }else{
            res.status(200).json(stripeRes)
        }
    })
}
