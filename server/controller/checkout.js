// PORT here is different than the server 3000 instead 2000
const PORT = process.env.PORT || 3000;
const stripe = require('stripe')('sk_test_51LTIFKLKQTPL6CL94CQQPo12m5U21TtXd9ZABoYyvcwU5rOHazpbefvjFkpiDwjx0ws4cTaLZQQI8jJoNYPDWcDr00aLNMyjkG');
const YOUR_DOMAIN = `${PORT}`;

async function payStripe(req , res) {
    
    const total = req.body.subtotal*100
    // const cartitems = req.body.cartContext
    // console.log(cartitems);

    const session = await stripe.checkout.sessions.create({
        line_items: [
        {
            price_data: {
                currency: 'cad',
                product_data: {
                    name: 'Test Run 1',
                },
                unit_amount: total,
            },
            quantity: 1,
        },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/checkout?success=true`,
        cancel_url: `${YOUR_DOMAIN}/checkout?canceled=true`,
    });
    // console.log(session);
    // res.redirect(303, session.url);
    res.send({ url: session.url });
}

module.exports = {
    payStripe
}