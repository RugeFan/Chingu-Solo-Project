import React, { memo, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

import { useRoutes } from "react-router-dom";
import routes from "./router";

import QuoteForm from './components/QuoteForm'
import ServiceSelection from "./components/ServiceSelection";
import { useSelector } from "react-redux";
import ThankYou from "./components/ThankYou";

import OrderConfirm from "./components/OrderConfirm.jsx";





const App = memo(() => {
  const { isQuoteFormVisible, isServiceSelectionVisible, isOrderConfirmVisible, isThankYouVisible } = useSelector(state => state.formVisible);

  return <div>
    <AppHeader />
    <div>
      {useRoutes(routes)}
    </div>
    <AppFooter />
    <QuoteForm open={isQuoteFormVisible} />
    <ServiceSelection open={isServiceSelectionVisible} />
    <ThankYou open={isThankYouVisible} />
    <OrderConfirm open={isOrderConfirmVisible} />
  </div >;
});


export default App;
