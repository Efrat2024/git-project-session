import React, { useState, useEffect } from 'react';
import { email, required } from '../form/validation';
import { useLoginMutation } from '../../../Store/Slices/authApiSlice';
import { useNavigate } from 'react-router-dom';
import ProductHero from '../views/ProductHero';
import ProductCTA from '../views/ProductCTA';
import ProductHowItWorks from '../views/ProductHowItWorks';
import ProductCategories from '../views/ProductCategories';
import ProductValues from '../views/ProductValues';
import ProductSmokingHero from '../views/ProductSmokingHero';

function Home() {
  const [submitting, setSubmitting] = useState(false);
  const [login, { isError, error, isLoading, isSuccess, data }] = useLoginMutation();
  const navigate = useNavigate();
  const validate = values => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };


  return (
    <React.Fragment>
      <ProductHero/>
      <ProductValues/>
      <ProductCategories/>
      <ProductHowItWorks/>
      <ProductCTA/>
      <ProductSmokingHero/>
    </React.Fragment>
  );
}

export default Home;
