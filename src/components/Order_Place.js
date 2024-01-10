import React from "react";

const OrderPlaced = () => {
    const containerStyle = {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        width: '300px',
        margin: 'auto',
        marginTop: '50px',
    };

    return (
        <div style={containerStyle}>
            <h1> Your Order has been Placed</h1>
            <p>Thank you for choosing our services.</p>
        </div>
    );
};



export default OrderPlaced;