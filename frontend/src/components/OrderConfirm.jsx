import React, { memo } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderInfo } from "../store/selector"; // 假设文件路径是 ../selectors.js
import { showServiceSelection, showThankYou } from "../store/features/formVisible";

const OrderConfirm = memo(({ open }) => {
  const dispatch = useDispatch();
  const orderInfo = useSelector(selectOrderInfo);

  const getFirstName = (name) => {
    if (!name) return "";
    const firstName = name.split(" ")[0];
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  };

  return (
    <Modal
      title=""
      open={open}
      maskClosable={true}
      footer={null}
      className="rounded-lg shadow-lg bg-themeColor"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Confirm Your Order</h2>
        <p className="text-gray-500">Please review your order details before submitting.</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
        <p className="text-lg font-medium">Thank you, {getFirstName(orderInfo?.name)}!</p>
        <p className="text-gray-600 mb-4">Here's a summary of your order:</p>

        <div className="mb-2">
          <strong>Service Type:</strong> {orderInfo?.services?.type.charAt(0).toUpperCase() + orderInfo?.services?.type.slice(1).toLowerCase() + " Cleaning"}
        </div>

        {orderInfo?.services?.extra?.length > 0 && (
          <div className="mb-2">
            <strong>Additional Services:</strong>
            <ul className="list-disc list-inside">
              {orderInfo.services.extra.map((extra, index) => (
                <li key={index} className="text-gray-700">
                  {extra.name} (x{extra.quantity})
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-2">
          <strong>Bedrooms:</strong> {orderInfo?.services?.bedRoom}
        </div>

        <div className="mb-2">
          <strong>Bathrooms:</strong> {orderInfo?.services?.bathRoom}
        </div>

        <div className="mb-4">
          <strong>Total Price:</strong> ${orderInfo?.services?.price}
        </div>

        <div className="mb-4">
          <strong>Address:</strong>
          <p>{orderInfo?.address?.street}, {orderInfo?.address?.suburb}, {orderInfo?.address?.postalCode}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> By submitting your order, you are simply notifying us of your interest. Our team will contact you within 24 hours to confirm the details. No payment or contract is required at this stage.
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <Button onClick={() => dispatch(showServiceSelection())} className="bg-gray-200 text-gray-700 hover:bg-gray-300">Back</Button>
        <Button onClick={() => dispatch(showThankYou())} type="primary" className="bg-themeColor text-white">Submit</Button>
      </div>
    </Modal>
  );
});

export default OrderConfirm;
