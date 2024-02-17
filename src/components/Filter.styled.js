import styled from 'styled-components';

export const FilterBar = styled.div`
  top: 150px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 859px;
  height: 74px;
  padding: 0;
  margin: 0 auto 50px auto;
  /* @media screen and (min-width: 768px) {
    height: 80px;
  } */
`;
export const TitleFilter = styled.h4`
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  color: rgb(138, 138, 137);
`;
export const FilterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  margin: 0;
`;
export const WrapSelect = styled.div`
  display: flex;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 12px 18px 16px 18px;
`;
export const SelectBrand = styled.select`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 224px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  color: rgb(18, 20, 23);
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  cursor: pointer;
  /* .brand {
    width: 224px;
    height: 20px;
  }
  .price {
    width: 90px;
    height: 20px;
  } */
`;
export const OptionForm = styled.option`
  position: absolute;
  display: flex;
  font-size: 14px;
  outline: transparent;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  background-color: rgb(255, 255, 255);
  padding: 18px;
  color: rgba(18, 20, 23, 0.2);
  margin: 50px 0 0 0;
  /* -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; */
  /* .brand {
    width: 224px;
    height: 236px;
  }
  .price {
    width: 90px;
    height: 160px;
  } */
`;
export const SelectPrice = styled.select`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 125px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  color: rgb(18, 20, 23);
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  cursor: pointer;
`;
export const WrapMileage = styled.div`
  display: flex;
  border-radius: 14px;
  background: rgb(247, 247, 251);
  padding: 12px 18px 16px 18px;
  .text {
    width: 44px;
    height: 20px;
    color: rgb(18, 20, 23);
    font-family: 'Manrope';
    font-size: 16px;
    font-weight: 500;
    line-height: 1.11;
    text-align: left;
  }
`;
export const SelectMileage = styled.select`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 68px;
  height: 20px;
  outline: rgb(247, 247, 251);
  border: none;
  background-color: rgb(247, 247, 251);
  color: rgb(18, 20, 23);
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.11;
  text-align: left;
  cursor: pointer;
`;
