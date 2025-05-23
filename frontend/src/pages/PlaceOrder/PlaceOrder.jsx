import React, { useContext, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.forEach(item => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token }
      });

      if (response.data.success) {
        toast.success("🎉 Thanks for your order! It has been placed successfully.");
        setCartItems({});
      } else {
        toast.error("❌ Failed to place the order. Please try again.");
      }
    } catch (err) {
      toast.error("⚠️ Something went wrong. Please try later.");
    }
  };

  return (
    <>
      <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='Firstname' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Lastname' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email' />
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
          <div className="multi-fields">
            <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
            <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Pin-code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
          </div>
          <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone' />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
            <button type='submit'>Proceed to Checkout</button>
          </div>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default PlaceOrder;
