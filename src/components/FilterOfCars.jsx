// import React from 'react';
// import Select from 'react-select';

// function getCategories(items, itemName) {
//   if (!items) return [];
//   return items.reduce((acc, item) => {
//     if (!acc.includes(item[itemName])) acc.push(item[itemName]);
//     return acc.sort((a, b) => a.localeCompare(b));
//   }, []);
// }

//   const brandOptions = getCategories(catalog, 'make');

// export default function FilterOfCars() {
//   return (
//     <div>
//       <Select
//         defaultValue={'Enter the text'}
//         options={brandOptions}
//         styles={colourStyles}
//       />
//     </div>
//   );
// }
