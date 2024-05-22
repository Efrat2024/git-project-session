import React, { useState, useEffect } from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../../css/components-of-css-temlate/Typography';
import AppFooter from '../views/AppFooter';
import AppAppBar from '../views/AppAppBarManager';
import AppForm from '../views/AppForm';
import { email, required } from '../form/validation';
import RFTextField from '../../css/components-of-form/RFTextFeild';
import FormButton from '../../css/components-of-form/FormButton';
import FormFeedback from '../../css/components-of-form/FormFeedback';
import SignUp from '../views/SignUp';
import { useLoginMutation } from '../../../Store/Slices/authApiSlice';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductHero from '../views/ProductHero';
import ProductCTA from '../views/ProductCTA';
import ProductHowItWorks from '../views/ProductHowItWorks';
import ProductHeroLayout from '../views/ProductHeroLayout';
import ProductCategories from '../views/ProductCategories';
import ProductValues from '../views/ProductValues';
import ProductSmokingHero from '../views/ProductSmokingHero';

function HomeBeforeSingIn() {
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
       {/* <AppAppBar />  */}
      <ProductHero/>
      <ProductValues/>
      
      <ProductHowItWorks/>
      <ProductCTA/>
      <ProductSmokingHero/>
      
    </React.Fragment>
  );
}

export default HomeBeforeSingIn;
