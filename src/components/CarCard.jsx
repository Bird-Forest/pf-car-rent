import React, { useState } from 'react';
import {
  BtnCard,
  BtnHeart,
  ImgCar,
  TextCard,
  TitleCard,
  WrapCarCard,
  WrapTextCard,
  WrapTitleCard,
} from './Car.styled';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite} from '../redux/server';
import { createPortal } from 'react-dom';
import CarPopUp from './CarPopUp';

export default function CarCard({ item }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleLikes = evt => {
    console.log(evt.currentTarget.id);
    const idCar = Number(evt.currentTarget.id);

    if (!item.completed) {
      dispatch(addFavorite(idCar));
    } else {
      dispatch(deleteFavorite(idCar));
    }
  };

  return (
    <>
      <WrapCarCard id={item.id}>
        <ImgCar src={item.img} alt={item.make} />
        <BtnHeart
          type="button"
          onClick={handleLikes}
          id={item.id}
        >
          {item.completed ? (
            <BsHeartFill className="icon-heart-fill" />
          ) : (
            <BsHeart className="icon-heart" />
          )}
        </BtnHeart>
        <WrapTitleCard>
          <TitleCard>
            {item.make},{item.year}
          </TitleCard>
          <TitleCard>{item.rentalPrice}</TitleCard>
        </WrapTitleCard>
        <WrapTextCard>
          <TextCard>
            {item.address}
            {item.rentalCompany}Premium
          </TextCard>
          <TextCard>
            {item.type}
            {item.model}
            {item.mileage}
            {item.functionalities}
          </TextCard>
        </WrapTextCard>
        <BtnCard id={item.id} onClick={() => setShowModal(true)}>Learn more</BtnCard>
        {showModal && createPortal(
        <CarPopUp item={item} onClose={() => setShowModal(false)} />,
        document.body
      )}
      </WrapCarCard>
    </>
  );
}
