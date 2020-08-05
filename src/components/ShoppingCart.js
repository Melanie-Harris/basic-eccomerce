import React, { Component } from 'react';
import formatCur from '../formatCur'


export default class ShoppingCart extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert" style={{ backgroundColor:"#b2a18f58", color:"black", marginTop:"110px"}}>
                {cartItems.length === 0
                    ? "Shopping cart is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right', backgroundColor:"#c5362b" }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                                    {item.count} X {formatCur.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Sum: {formatCur.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                    <button onClick={() => alert('Working to connect payment API.')} className="btn btn-success">checkout</button>
                    </div>
                }
            </div>
        )
    }
}