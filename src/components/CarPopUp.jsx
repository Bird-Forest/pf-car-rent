import React, { useEffect } from 'react';
import {
  Backdrop,
  BtnClose,
  BtnRent,
  ImgPopUp,
  TextPopUp,
  TitlePopUp,
  WrapAccesFunk,
  WrapDescript,
  WrapPopUp,
  WrapRent,
  WrapTextPopUp,
} from './PopUp.styled';
import { IoCloseSharp } from 'react-icons/io5';

export default function CarPopUp({ item, onClose }) {
  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // window.addEventListener('click', onClose);
    window.addEventListener('keydown', handleEscape);

    return () => {
      // window.removeEventListener('click', onClose);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  let address = item.address.split(',');
  let driver = item.rentalConditions.split('\n');
  let age = driver[0].split(':');

  return (
    <Backdrop name="close">
      <WrapPopUp id={item.id}>
        <BtnClose type="button" id={item.id} onClick={onClose}>
          <IoCloseSharp className="close" />
        </BtnClose>
        <ImgPopUp src={item.img} alt={item.make} />
        <TitlePopUp>
          {item.make} <span className="blue">{item.model}</span>, {item.year}
        </TitlePopUp>
        <WrapTextPopUp>
          <TextPopUp>
            <p className="text border">{address[1]}</p>
            <p className="text border">{address[2]}</p>
            <p className="text border">Id: {item.id}</p>
            <p className="text border">Year: {item.year}</p>
            <p className="text">Type: {item.type}</p>
          </TextPopUp>
          <TextPopUp>
            <p className="text border">
              Fuel consumption: {item.fuelConsumption}
            </p>
            <p className="text">Engine size: {item.engineSize}</p>
          </TextPopUp>
        </WrapTextPopUp>
        <WrapDescript>
          <h5 className="description">{item.description}</h5>
        </WrapDescript>
        <WrapAccesFunk>
          <h5 className="title">Accessories and functionalities:</h5>
          <div className="wrap">
            <p className="text border last">{item.accessories[0]}</p>
            <p className="text border last">{item.accessories[1]}</p>
            <p className="text last">{item.accessories[2]}</p>
          </div>
          <div className="wrap">
            <p className="text border last">{item.functionalities[0]}</p>
            <p className="text border last">{item.functionalities[1]}</p>
            <p className="text last">{item.functionalities[2]}</p>
          </div>
        </WrapAccesFunk>
        <WrapRent>
          <h5 className="title-rent">Rental Conditions:</h5>
          <div className="wrap-rent">
            <p className="text-rent">
              {age[0]}
              <span className="blue">: {age[1]}</span>
            </p>
            <p className="text-rent">{driver[1]}</p>
          </div>
          <div className="wrap-rent">
            <p className="text-rent last">{driver[2]}</p>
            <p className="text-rent">
              Mileage<span className="blue">: {item.mileage}</span>
            </p>
            <p className="text-rent">
              Price<span className="blue">: {item.rentalPrice}</span>
            </p>
          </div>
        </WrapRent>
        <BtnRent>
          <a href="tel:+380730000000">Rental car</a>
        </BtnRent>
      </WrapPopUp>
    </Backdrop>
  );
}
