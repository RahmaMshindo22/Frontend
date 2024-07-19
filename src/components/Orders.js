import React from 'react';
import './Orders.css';

const Orders = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const product = formData.get('product');
    const quantity = formData.get('quantity');
    console.log('Product:', product);
    console.log('Quantity:', quantity);
    document.getElementById('response').innerHTML = `Order placed for ${quantity} ${product}(s).`;
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bankName = formData.get('bankName');
    const cardNumber = formData.get('cardNumber');
    const enterAmount = formData.get('enterAmount');
    console.log('Bank Name:', bankName);
    console.log('Card Number:', cardNumber);
    console.log('Entered Amount:', enterAmount);
    document.getElementById('response').innerHTML = `Payment submitted for ${enterAmount} to ${bankName}.`;
  };

  return (
    <div className="orders-container">
      <header>
        <h1>Your Orders</h1>
        <p>View and track your orders here.</p>
      </header>
      <main>
        <section className="order-section">
          <h2>Place Your Order</h2>
          <form id="orderForm" onSubmit={handleSubmit}>
            <label htmlFor="product">Select Product:</label>
            <select id="product" name="product">
              <option value="crab">Crab</option>
              <option value="garfish">Garfish</option>
              <option value="eel">Eel</option>
              <option value="octopus">Octopus</option>
              <option value="lobster">Lobster</option>
              <option value="ngisi">Ngisi</option>
              <option value="shrimp">Shrimp</option>
              <option value="skate-fish">Skate-fish</option>
              <option value="shark">Shark</option>
              <option value="red-snapper">Red-snapper</option>
              <option value="scadfish">Scadfish</option>
              <option value="salmon">Salmon</option>
              <option value="tuna-fish">Tuna-fish</option>
            </select>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
            <button type="submit" className="btn">Place Order</button>
          </form>
        </section>
        <section className="payment-section">
          <h2>Enter Payment Details</h2>
          <form id="paymentForm" onSubmit={handlePaymentSubmit}>
            <div className="form-group">
              <label htmlFor="bankName">Bank Name:</label>
              <input type="text" id="bankName" name="bankName" required />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="enterAmount">Enter amount:</label>
              <input type="text" id="enterAmount" name="enterAmount" required />
            </div>
            <button type="submit" className="btn">Submit Payment</button>
          </form>
        </section>
        <section className="delivery-section">
          <h2>Confirm Delivery</h2>
          <div className="container">
            <button className="btn">Confirm Delivery</button>
          </div>
        </section>
      </main>
      <div id="response" className="response-container"></div>
    </div>
  );
};

export default Orders;
