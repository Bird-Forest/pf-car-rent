import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCatalog } from '../redux/selectors';
import {
  FilterBar,
  FilterForm,
  OptionForm,
  SelectBrand,
  SelectMileage,
  SelectPrice,
  TitleFilter,
  WrapMileage,
  WrapSelect,
} from './Filter.styled';
import { setBrand, setPrice } from '../redux/filterSlice';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterCars() {
  const catalog = useSelector(selectCatalog);
  const brand = getCategories(catalog, 'make');
  const price = getCategories(catalog, 'rentalPrice');
  const mileageFrom = [0, 2000, 4000, 6000, 8000];
  const mileageTo = [2000, 4000, 6000, 8000, 10000];

  const dispatch = useDispatch();

  const handleOnChangeFilter = event => {
    let value = event.target.value;
    if (event.target.name === 'brand') {
      dispatch(setBrand(value));
    }
    if (event.target.name === 'price') {
      dispatch(setPrice(value));
    }
  };

  return (
    <FilterBar>
      <FilterForm>
        <TitleFilter htmlFor="brand">Car brand</TitleFilter>
        <WrapSelect>
          <SelectBrand id="brand" name="brand" onChange={handleOnChangeFilter}>
            <OptionForm value="">Enter the text</OptionForm>
            {brand.map(option => (
              <OptionForm key={option} value={option}>
                {option}
              </OptionForm>
            ))}
          </SelectBrand>
        </WrapSelect>
      </FilterForm>
      <FilterForm>
        <TitleFilter htmlFor="price">Price/ 1 hour</TitleFilter>
        <WrapSelect>
          <SelectPrice id="price" name="price" onChange={handleOnChangeFilter}>
            <OptionForm value="">To$</OptionForm>
            {price.map(option => (
              <OptionForm key={option} value={option}>
                {option}
              </OptionForm>
            ))}
          </SelectPrice>
        </WrapSelect>
      </FilterForm>
      <FilterForm>
        <TitleFilter>Сar mileage / km</TitleFilter>
        <WrapMileage>
          <p className="text">From</p>
          <SelectMileage
            id=" mileageFrom"
            name="mileageFrom"
            onChange={handleOnChangeFilter}
          >
            {/* <OptionForm value="">From</OptionForm> */}
            {mileageFrom.map(option => (
              <OptionForm key={option} value={option}>
                {option}
              </OptionForm>
            ))}
          </SelectMileage>
          <p className="text">To</p>
          <SelectMileage
            id="mileageTo"
            name="mileageTo"
            onChange={handleOnChangeFilter}
          >
            {/* <OptionForm value="">To</OptionForm> */}
            {mileageTo.map(option => (
              <OptionForm key={option} value={option}>
                {option}
              </OptionForm>
            ))}
          </SelectMileage>
        </WrapMileage>
      </FilterForm>
      <button>Search</button>
    </FilterBar>
  );
}
