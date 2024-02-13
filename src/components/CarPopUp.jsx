import React from 'react';
import {
  Backdrop,
  BtnRent,
  ImgPopUp,
  TitlePopUp,
  WrapAccesFunk,
  WrapDescript,
  WrapPopUp,
  WrapRent,
  WrapTextPopUp,
} from './PopUp.styled';

export default function CarPopUp({ item, onClose }) {
  return (
    <Backdrop>
      <WrapPopUp id={item.id}>
        <button onClick={onClose}></button>
        <ImgPopUp src={item.img} alt={item.make} />
        <TitlePopUp>
          {item.make}
          {item.model},{item.year}
        </TitlePopUp>
        <WrapTextPopUp>
          <p className="text">
            {item.address}
            {item.rentalCompany}Premium
          </p>
          <p className="text">
            {item.type}
            {item.model}
            {item.mileage}
            {item.functionalities}
          </p>
        </WrapTextPopUp>
        <WrapDescript>
          <h5 className="description">{item.description}</h5>
        </WrapDescript>
        <WrapAccesFunk>
          <h5 className="access-funk">Accessories and functionalities:</h5>
          <p className="text">{item.accessories}</p>
          <p className="text">{item.functionalities}</p>
        </WrapAccesFunk>
        <WrapRent>
          <h5 className="subtitle">Rental Conditions:</h5>
          <p className="text-rent">Minimum age:{item.rentalConditions}</p>
          <p className="text-rent">Valid driver’s license</p>
          <p className="text-rent">{item.rentalConditions}</p>
          <p className="text-rent">Mileage:{item.mileage}</p>
          <p className="text-rent">Price:{item.rentalPrice}</p>
        </WrapRent>
        <BtnRent>Rental car</BtnRent>
      </WrapPopUp>
    </Backdrop>
  );
}
