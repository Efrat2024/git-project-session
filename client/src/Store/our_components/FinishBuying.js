
import React from 'react';
import { useGetUserQuery } from '../Slices/authApiSlice';
import useAuth  from '../app/useAuth';
import img1 from '../../images/bohemian-man-with-his-arms-crossed.jpg'
import './MNGHome.css';
function FinishBuying(props) {
  const { data, isLoading, isError, error } = useGetUserQuery();
  const {firstname,lastname} = useAuth()
  const username=`${firstname} ${lastname}`

  function redirectToPayPal() {
    // Redirect the user to the PayPal URL
    try{
      window.location.href ='https://www.paypal.com/ncp/payment/EQD3GWV5F7KJW';
    }
    catch(err){
      alert(err);
    }

   
  }
  const element = document.getElementById("paypal-button-container");
          element.innerHTML = "";
          element.innerHTML = "<h3>Thank you for your payment!</h3>";


  return (<>
  {isLoading? <h1>Loading</h1>:
  <>
  <br></br><br></br><br></br><br></br>

  
    <link
      rel="stylesheet"
      type="text/css"
      href="https://www.paypalobjects.com/webstatic/en_US/developer/docs/css/cardfields.css"
    />
    <script src="https://www.paypal.com/sdk/js?components=buttons,card-fields&client-id=<%= clientId %>"></script>
  
    <div id="paypal-button-container" class="paypal-button-container"></div>
    <div id="checkout-form">
      <div id="card-name-field-container"></div>
      <div id="card-number-field-container"></div>
      <div id="card-expiry-field-container"></div>
      <div id="card-cvv-field-container"></div>
      <div>
        <label for="card-billing-address-line-1">Billing Address</label>
        <input
          type="text"
          id="card-billing-address-line-1"
          name="card-billing-address-line-1"
          autocomplete="off"
          placeholder="Address line 1"
        ></input>
      </div>
      <div>
        <input
          type="text"
          id="card-billing-address-line-2"
          name="card-billing-address-line-2"
          autocomplete="off"
          placeholder="Address line 2"
        ></input>
      </div>
      <div>
        <input
          type="text"
          id="card-billing-address-admin-area-line-1"
          name="card-billing-address-admin-area-line-1"
          autocomplete="off"
          placeholder="Admin area line 1"
        ></input>
      </div>
      <div>
        <input
          type="text"
          id="card-billing-address-admin-area-line-2"
          name="card-billing-address-admin-area-line-2"
          autocomplete="off"
          placeholder="Admin area line 2"
        ></input>
      </div>
      <div>
        <input
          type="text"
          id="card-billing-address-country-code"
          name="card-billing-address-country-code"
          autocomplete="off"
          placeholder="Country code"
        ></input>
      </div>
      <div>
        <input
          type="text"
          id="card-billing-address-postal-code"
          name="card-billing-address-postal-code"
          autocomplete="off"
          placeholder="Postal/zip code"
        ></input>
      </div>
     
      <button id="card-field-submit-button" type="button">
        Pay now with Card Fields
      </button>
   
    <script src="./public/app.js"></script>
 
  <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=YOUR_COMPONENTS"></script>

<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=buttons"></script>
    
<div class="box">
  <span class="paypal-logo">
    <i>Pay</i><i>Pal</i>
  </span>
  

  
  <button class="paypal-button">
    <span class="paypal-button-title">
      Buy now with
    </span>
    <span class="paypal-logo">
      <i>Pay</i><i>Pal</i>
    </span>
  </button>
</div>


<button onClick={redirectToPayPal}>לתשלום</button>
 <div className="card2">
      <div className="card-content">
        <div className="flex flex-col items-center justify-center xl:flex-row">
          <div className="xl:w-2/3 xl:ml-auto">
            <h2 className="bold">קנית חכם! {username}</h2>
            <p className="bold2">.אתה בטוח תהנה בנופש אנחנו כאן תמיד איתך... </p>
            <p className="bold">.חפש את האישור במייל. </p>
          </div>
          <img className="w-4 sm:w-40em xl:w-100rem mx-auto" src={img1} alt="Logo"/>
        </div>
      </div>

    </div>
    {/* <AppAppBar/> */}
    </div>
</>}</>
  );
}

export default FinishBuying;
