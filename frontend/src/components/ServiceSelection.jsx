import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Modal, Select, Button } from "antd";
import ServiceBox from "./ServiceBox";
import { serviceTypes, serviceOptions, bedroomPrices, bathroomPrices } from "../constants";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { updateServices } from "../store/features/order";
import { showQuoteForm, hideAllForms, showThankYou, showOrderConfirm } from "../store/features/formVisible";
import { springCleaning, onceOff, regular } from "../assets/images";
import styled from 'styled-components';

const { Option } = Select;

const StyledSelect = styled(Select)`
  .ant-select-selector {
    background-color: #6D8552 !important;
    color: white !important;
  }

  .ant-select-item-option {
    background-color: #6D8552 !important;
    color: white !important;
  }

  .ant-select-item-option-active {
    background-color: #000 !important;
    color: white !important;
  }
`;

const ServiceSelection = ({ open }) => {
  const dispatch = useDispatch();
  const { orderInfo } = useSelector(state => state.order);

  const initialServiceType = orderInfo.services.type || "basic";
  const initialBasePrice = serviceTypes[initialServiceType]?.price || 100;

  const [currentServiceType, setCurrentServiceType] = useState(initialServiceType);
  const [currentBasePrice, setCurrentBasePrice] = useState(initialBasePrice);
  const [bedrooms, setBedrooms] = useState("1 Bedroom");
  const [bathrooms, setBathrooms] = useState("1 Bathroom");
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceImg, setServiceImage] = useState(onceOff);

  const totalPrice = useMemo(() => {
    return selectedServices.reduce(
      (total, service) => total + service.price * service.quantity,
      currentServiceType === "move"
        ? currentBasePrice + (parseInt(bedrooms.match(/\d+/)[0]) - 1) * 30 + (parseInt(bathrooms.match(/\d+/)[0]) - 1) * 30
        : currentBasePrice + (parseInt(bedrooms.match(/\d+/)[0]) - 1) * 15 + (parseInt(bathrooms.match(/\d+/)[0]) - 1) * 20
    );
  }, [selectedServices, currentServiceType, currentBasePrice, bedrooms, bathrooms]);

  const handleServiceTypeChange = useCallback((value) => {
    setCurrentServiceType(value);
    setCurrentBasePrice(serviceTypes[value]?.price || 100);
  }, []);

  const handleFormSubmit = useCallback(async () => {
    const selectedServicesNames = selectedServices.map(service => ({
      name: service.name,
      quantity: service.quantity,
    }));

    const updatedServices = {
      type: currentServiceType,
      extra: selectedServicesNames,
      price: totalPrice,
      bedRoom: bedrooms,
      bathRoom: bathrooms
    };

    dispatch(updateServices(updatedServices));

    const apiUrl = process.env.NODE_ENV === 'production'
      ? 'https://pureglim.fly.dev/user/order'
      : 'http://localhost:3000/user/order';

    try {
      const response = await axios.put(apiUrl, {
        ...orderInfo,
        services: updatedServices,
        bedRoom: bedrooms,
        bathRoom: bathrooms
      });
      console.log(response.data);
    } catch (error) {
      console.error("There was an error updating the order:", error);
      alert("There was an error updating the order. Please try again.");
    }
    dispatch(showOrderConfirm());
  }, [selectedServices, currentServiceType, totalPrice, bedrooms, bathrooms, dispatch, orderInfo]);

  const handleBackClick = useCallback(() => {
    dispatch(showQuoteForm());
    document.body.style.overflow = 'hidden';
  }, [dispatch]);

  const handleServiceClick = useCallback((service, quantity) => {
    setSelectedServices((prev) =>
      quantity === 0
        ? prev.filter((s) => s.id !== service.id)
        : prev.find((s) => s.id === service.id)
          ? prev.map((s) =>
            s.id === service.id ? { ...s, quantity } : s
          )
          : [...prev, { ...service, quantity }]
    );
  }, []);

  useEffect(() => {
    if (orderInfo && orderInfo.services.type) {
      setCurrentServiceType(orderInfo.services.type);
      setCurrentBasePrice(serviceTypes[orderInfo.services.type]?.price || 100);
    }
  }, [orderInfo]);

  useEffect(() => {
    const imageMap = {
      oneTime: onceOff,
      regular: regular,
      move: springCleaning,
    };
    setServiceImage(imageMap[currentServiceType]);
  }, [currentServiceType]);

  return (
    <Modal
      title="Select Your Additional Services"
      open={open}
      onCancel={() => dispatch(hideAllForms())}
      footer={null}
      maskClosable={true}
      className=" max-lg:top-[13vh] max-lg:h-[80vw]"
    >
      <div>
        <img
          className="w-full h-[18vh] object-cover mb-4 max-lg:hidden"
          src={serviceImg}
          alt=""
          style={{ objectPosition: '50% 50%' }}
        />
      </div>
      <StyledSelect
        value={currentServiceType}
        onChange={handleServiceTypeChange}
        className="w-full mb-4 rounded-full h-12 text-center"
        popupClassName="rounded-lg"
        style={{ backgroundColor: '#000', color: '#fff' }}
      >
        {Object.keys(serviceTypes).map((key) => (
          <Option key={key} value={key}>
            {serviceTypes[key].name} - ${serviceTypes[key].price}
          </Option>
        ))}
      </StyledSelect>

      <div className="flex space-x-4 mb-4">
        <Select
          value={bedrooms}
          onChange={setBedrooms}
          className="w-1/2 rounded-full h-12"
          popupClassName="rounded-lg"
        >
          {Object.keys(bedroomPrices).map((key) => (
            <Option key={key} value={key}>
              {key}
            </Option>
          ))}
        </Select>

        <Select
          value={bathrooms}
          onChange={setBathrooms}
          className="w-1/2 rounded-full h-12"
          popupClassName="rounded-lg"
        >
          {Object.keys(bathroomPrices).map((key) => (
            <Option key={key} value={key}>
              {key}
            </Option>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-4 gap-7 max-lg:grid-cols-3">
        {serviceOptions.map((service) => (
          <ServiceBox
            key={service.id}
            service={service}
            selected={!!selectedServices.find((s) => s.id === service.id)}
            onClick={handleServiceClick}
          />
        ))}
      </div>

      <div className="mt-4 text-right text-xl">
        <h3>Total Price: ${totalPrice}</h3>
      </div>

      <div className="flex justify-end mt-4">
        <Button
          onClick={handleBackClick}
          className="mr-2 rounded-full h-12 cursor-pointer text-black"
        >
          Back
        </Button>
        <Button
          type="primary"
          onClick={handleFormSubmit}
          className="rounded-full h-12 border-none text-white"
          style={{
            backgroundColor: '#6D8552',
            borderColor: '#6D8552',
            color: '#fff',
          }}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};

export default ServiceSelection;
