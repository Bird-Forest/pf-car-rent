import React from 'react';
import { useSelector } from 'react-redux';
import { selectCatalog } from '../redux/selectors';
import { FilterBar, FilterForm, OptionForm, SelectForm } from './Filter.styled';

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
  console.log(brand);
  const price = getCategories(catalog, 'rentalPrice');
  console.log(price);

  const mileageFrom = [0, 2000, 4000, 6000, 8000];
  const mileageTo = [2000, 4000, 6000, 8000, 10000];

  const handleOnChangeFilter = event => {
    const key = event.target.name;
    const value = event.target.value;
    console.log({ [key]: value });
    
    // filterProducts(key, value);
  };
  return (
    <FilterBar>
      <FilterForm>
      <label>Car brand</label>
        <SelectForm
          id="brand"
          name="brand"
          value={brand || ''}
          onChange={handleOnChangeFilter}
        >
            
          <OptionForm value="">Enter the text</OptionForm>
          {brand.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
      <label>Price/ 1 hour</label>
        <SelectForm
          id="price"
          name="price"
          value={price || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">To $</OptionForm>
          {price.map(option => (
            <OptionForm key={option} value={option}>
              {option}'$'
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
      <FilterForm>
      <label>Сar mileage / km</label>
        <SelectForm
          id=" mileageFrom"
          name=" mileageFrom"
          value={ mileageFrom || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">From</OptionForm>
          { mileageFrom.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
        <SelectForm
          id="mileageTo"
          name="mileageTo"
          value={mileageTo || ''}
          onChange={handleOnChangeFilter}
        >
          <OptionForm value="">To</OptionForm>
          {mileageTo.map(option => (
            <OptionForm key={option} value={option}>
              {option}
            </OptionForm>
          ))}
        </SelectForm>
      </FilterForm>
    </FilterBar>
  );
}
