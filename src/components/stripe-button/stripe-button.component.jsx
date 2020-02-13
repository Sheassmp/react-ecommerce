import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
 const priceForStripe = price * 100;
 const PublishableKey = 'pk_test_ZdXDnnetE1xy9mJOPSx8IUrU00TsGZk3HI';
 
 const onToken = token => {
     console.log(token);
     alert('Payment Successful');
 }

 return (
     <StripeCheckout
        label="Pay Now"
        name='Pineapple Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={PublishableKey}
     />
 );
};

export default StripeCheckoutButton;