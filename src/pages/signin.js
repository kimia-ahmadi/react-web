import React from 'react';
import SignIn from '../components/Signin';
import ScrollToTop from '../components/ScrollToTop';

const signinPage = () => {
  return (
    <>
      <ScrollToTop />
      <SignIn />
    </>
  );
};

export default signinPage;