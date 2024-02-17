import ListCars from '../components/ListCars';

import FilterCars from '../components/FilterCars';

export default function CatalogPage() {
  return (
    <div>
      <FilterCars />
      <ListCars />
    </div>
  );
}
