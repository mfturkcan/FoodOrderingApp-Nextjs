const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
import NextCors from "nextjs-cors";


export default async function handler(req, res) {

    console.log(req.method);

    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        origin: 'https://checkout.stripe.com',
        optionsSuccessStatus: 200,
        allowedHeaders: '*',
        preflightContinue: true,
    })
    //res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader('Access-Control-Allow-Origin', 'www.stripe.com');
    if (req.method === 'POST') {

    try {
      // Create Checkout Sessions from body params.
    const lineItems = req.body.orderList;

    const session = await stripe.checkout.sessions.create({

        payment_method_types: [
        'card',
        ],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/`,
        cancel_url: `${req.headers.origin}/checkout`,
    });

    res.redirect(303, session.url);

    } catch (err) {
        console.log(err);
        res.status(err.statusCode || 500).json(err.message);
    }

    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }

}
