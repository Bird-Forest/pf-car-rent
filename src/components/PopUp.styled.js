import styled from 'styled-components';

export const Backdrop = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
.multiple-filters {
  backdrop-filter: blur(20px) saturate(120%) contrast(200%);
}
background-color: #3498db;
backdrop-filter: blur(5px);
`;

export const WrapPopUp = styled.div`
display: flex;
width: 541px;
height: 752px;
border-radius: 24px;
background-color: #ffffff;
padding: 40px;
margin: 0;
`;
export const ImgPopUp = styled.img`
display: block;
/* width: 274px; */
width: 461px;
height: 248px;
border-radius: 14px;
object-fit: cover;
margin: 0 0 14px 0;
`;
export const TitlePopUp = styled.h4`
font-family: 'Manrope';
font-weight: 500;
font-size: 18px;
line-height: 1.3;
text-align: left;
color: rgb(18, 20, 23);
margin: 0 0 8px 0;
`;
export const WrapTextPopUp = styled.div`
width: 277px;
height: 40px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 0px;
margin: 0 0 14px 0;
.text {
color: rgba(18, 20, 23, 0.5);
font-family: 'Manrope';
font-size: 12px;
font-weight: 400;
line-height: 1.5;
text-align: left;
}
`;
export const WrapDescript = styled.div`
width: 461px;
height: 40px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 0px;
margin: 0 0 24px 0;
.description {
color: rgb(18, 20, 23);
font-family: 'Manrope';
font-size: 14px;
font-weight: 400;
line-height: 1.43;
letter-spacing: 0%;
text-align: left;
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
.access-funk{
color: rgb(18, 20, 23);
font-family:' Manrope';
font-size: 14px;
font-weight: 500;
line-height: 1.43;
letter-spacing: 0%;
text-align: left;
}
.text {
color: rgba(18, 20, 23, 0.5);
font-family: 'Manrope';
font-size: 12px;
font-weight: 400;
line-height: 1.5;
text-align: left;
}
`;
export const WrapRent = styled.div`
width: 461px;
height: 100px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 0px;
margin: 0 0 24px 0;
.subtitle{
color: rgb(18, 20, 23);
font-family:' Manrope';
font-size: 14px;
font-weight: 500;
line-height: 1.43;
letter-spacing: 0%;
text-align: left;
}
.text-rent{
font-family: 'Montserrat';
font-size: 12px;
font-weight: 600;
line-height: 1.5;
letter-spacing: -2%;
text-align: left;
}
`;
export const BtnRent = styled.button`
width: 168px;
height: 44px;
color: rgb(255, 255, 255);
font-family: 'Manrope';
font-size: 14px;
font-weight: 600;
line-height: 1.43;
letter-spacing: 0%;
text-align: left;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 50px 12px 50px;
cursor: pointer;
&:hover, :focus {
  background: rgb(11, 68, 205);
}
`;