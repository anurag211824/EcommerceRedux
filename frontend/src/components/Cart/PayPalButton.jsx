import {
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";
import PropTypes from "prop-types";

const PayPalButton = ({amount,onSuccess,onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AXqNXvD2jL-6zhvPFE4wd9vAIB38kCtKOONNNZFP3O4CnLWs0sJs4wd0Vot3PWmeIz2MAC8MkThzH_aA",
      }}
    >

<PayPalButtons style={{layout:"vertical"}} createOrder={(data,actions)=>{
    return actions.order.create({purchase_units:[{amount:{value:amount}}]})
}} onApprove={(data,actions)=>{
    return actions.order.capture().then(onSuccess)
}} onError={onError} ></PayPalButtons>

    </PayPalScriptProvider>
  );
};

PayPalButton.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default PayPalButton;
