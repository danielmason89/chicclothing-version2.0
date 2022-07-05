import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
// import { useHistory } from "react-router"
import axios from 'axios';

const KEY = "pk_test_51JqPIpBFSjBDsGwUDjoBnqe7QIJFzdfjHg5vvcYGrfy8WK9zjsLD0rq3SVKoztfkcjTby0BopPdPQqD5yMnUS0yW00kJuNNj5L";

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);
    // const history = useHistory;
    const onToken = (token) => {
        setStripeToken(token)
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 2000,
                    }
                );
                console.log(res.data);
                // history.push("/success");
            } catch (err) {
                console.log(err)
            }
        };
        if (stripeToken) {

            makeRequest();
            console.log(makeRequest());
        }
    }, [stripeToken])

    return (
        <div>

            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout
                    name="Chic-Clothing"
                    // image= ""
                    billingAddress
                    shippingAddress
                    description="your total is $20"
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button>
                    </button>
                </StripeCheckout>
            )}
        </div>
    );
};

export default Pay;
