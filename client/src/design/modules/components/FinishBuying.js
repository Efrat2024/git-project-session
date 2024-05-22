
import React from 'react';
import { useGetUserQuery } from '../../../Store/Slices/authApiSlice';
import useAuth  from '../../../Store/app/useAuth';
import img1 from '../../../images/bohemian-man-with-his-arms-crossed.jpg'
import '../../css/MNGHome.css';
function FinishBuying(props) {
  const { data, isLoading, isError, error } = useGetUserQuery();
  const {firstname,lastname} = useAuth()
  const username=`${firstname} ${lastname}`

  function redirectToPayPal() {
    window.location.href ='https://www.paypal.com/ncp/payment/EQD3GWV5F7KJW';
  }

  return (<>
  {isLoading? <h1>טוען</h1>:
  <>
  <br></br><br></br><br></br><br></br>
  <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=YOUR_COMPONENTS"></script>

<script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID&components=buttons"></script>
    



 <div className="card2">
      <div className="card-content">
        <div className="flex flex-col items-center justify-center xl:flex-row">
          <div className="xl:w-2/3 xl:ml-auto">
          
            <h2 className="bold">קנית חכם {username}</h2>
            <p className="bold2">.אתה בטוח תהנה בנופש אנחנו כאן תמיד איתך... </p>
            <p className="bold">.חפש את האישור במייל. </p><button onClick={redirectToPayPal}>עבור לדף תשלום מאובטח</button>
          </div>
          <img className="w-4 sm:w-40em xl:w-100rem mx-auto" src={img1} alt="Logo"/>
        </div>
      </div>

    </div>
</>}</>
  );
}

export default FinishBuying;
