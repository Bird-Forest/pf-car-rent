import styled from 'styled-components';

export const FilterBar = styled.div`
  top: 0;
  right: 0;
  display: flex;
  width: 859px;
  height: 74px;
  background-color: #0d47a1;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    height: 80px;
  }
`;

export const FilterForm = styled.form`
  display: inline-block;
  padding: 0;
  margin: 0;
`;
export const SelectForm = styled.select`
  display: flex;
  width: 84px;
  height: 40px;
  font-size: clamp(0.5rem, 2.5vw, 1.25rem);
  font-weight: 700;
  color: white;
  background-color: #0d47a1;
  border-color: #0d47a1;
  text-align: center;
  outline: #0d47a1;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
export const OptionForm = styled.option`
  font-size: clamp(0.5rem, 2.5vw, 1.25rem);
  font-weight: 500;
`;