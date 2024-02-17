import styled from 'styled-components';

export const Backdrop = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  backdrop-filter: blur(4px);
  background: rgba(18, 20, 23, 0.5);
`;

export const WrapPopUp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 461px;
  height: 672px;
  border-radius: 24px;
  background-color: #ffffff;
  padding: 40px;
  margin: 0;
`;
export const ImgPopUp = styled.img`
  display: block;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  object-fit: cover;
  margin: 0 0 14px 0;
`;
export const BtnClose = styled.button`
  top: 16px;
  right: 16px;
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  padding: 0;
  .close {
    width: 20px;
    height: 20px;
    fill: rgb(18, 20, 23);
  }
`;
export const TitlePopUp = styled.h4`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  text-align: left;
  color: rgb(18, 20, 23);
  margin: 0 0 8px 0;
  .blue {
    color: rgb(52, 112, 255);
  }
`;
export const WrapTextPopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
  width: 461px;
  height: 40px;
  padding: 0;
  margin: 0 0 14px 0;
`;
export const TextPopUp = styled.div`
  width: 461px;
  height: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin: 2px 0; */
  padding: 0px;
  .text {
    color: rgba(18, 20, 23, 0.5);
    font-family: 'Manrope';
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    padding: 0 4px;
    margin: 2px 0;
  }
  .border {
    height: 16px;
    border-right: 2px solid rgba(18, 20, 23, 0.1);
  }
`;
export const WrapDescript = styled.div`
  width: 461px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  margin: 0 0 24px 0;
  .description {
    width: 461px;
    color: rgb(18, 20, 23);
    font-family: 'Manrope';
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: 0%;
    text-align: left;
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const WrapAccesFunk = styled.div`
  width: 461px;
  height: 68px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  margin: 0 0 24px 0;
  .title {
    color: rgb(18, 20, 23);
    font-family: 'Manrope';
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    letter-spacing: 0%;
    text-align: left;
    margin: 0 0 8px 0;
  }
  .wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 461px;
    margin: 0 0 4px 0;
  }
  .text {
    color: rgba(18, 20, 23, 0.5);
    font-family: 'Manrope';
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    padding: 0 4px;
  }
  .border {
    height: 16px;
    border-right: 2px solid rgba(18, 20, 23, 0.1);
  }
  .last {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const WrapRent = styled.div`
  width: 461px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 0;
  margin: 0 0 24px 0;
  .title-rent {
    color: rgb(18, 20, 23);
    font-family: 'Manrope';
    font-size: 14px;
    font-weight: 500;
    line-height: 1.43;
    text-align: left;
    /* margin: 0;
    padding: 0; */
  }
  .wrap-rent {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    width: 461px;
    height: 32px;
  }
  .text-rent {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 212px;
    height: 18px;
    background-color: rgb(249, 249, 249);
    border-radius: 35px;
    font-family: 'Montserrat';
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -2%;
    padding: 7px 14px;
  }
  .last {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .blue {
    color: rgb(52, 112, 255);
  }
`;
export const BtnRent = styled.button`
  width: 168px;
  height: 44px;
  background-color: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: 0%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 12px 50px 12px 50px;
  cursor: pointer;
  &:hover,
  :focus {
    background: rgb(11, 68, 205);
  }
`;
