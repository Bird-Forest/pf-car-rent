import styled from 'styled-components';

export const WrapListCars = styled.ul`
display: flex;
flex-wrap: wrap;
row-gap: 50px;
column-gap: 28px;
`;
export const WrapCarCard = styled.li`
position: relative;
display: flex;
flex-direction: column;
width: 274px;
height: 426px;
gap: 15px;
padding: 0;
margin: 0;
`;
export const ImgCar = styled.img`
display: block;
/* width: 274px; */
width: 100%;
height: 268px;
border-radius: 14px;
object-fit: cover;
margin: 0 0 14px 0;
`;
export const BtnHeart = styled.button`
position: absolute;
top: 16px;
right: 16px;
 display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  .icon-heart {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
  .icon-heart-fill {
    width: 20px;
    height: 20px;
    fill: #ff9800;
  }
`
export const WrapTitleCard = styled.div`
display: flex;
justify-content: space-between;
width: 274px;
height: 24px;
padding: 0;
margin: 0 0 8px 0;
`;
export const TitleCard = styled.p`
font-family: 'Manrope';
font-weight: 500;
font-size: 16px;
line-height: 1.5;
text-align: left;
color: rgb(18, 20, 23);
`;
export const WrapTextCard = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 274px;
height: 40px;
padding: 0;
margin: 0 0 28px 0;
`;
export const TextCard = styled.p`
font-family: 'Manrope';
font-weight: 400;
font-size: 12px;
line-height: 1.5;
text-align: left;
color: rgba(18, 20, 23, 0.5);
`;
export const BtnCard = styled.button`
width: 274px;
height: 44px;
border-radius: 12px;
font-family: 'Manrope';
font-weight: 600;
font-size: 14px;
line-height: 1.4;
text-align: center;
background-color: rgb(52, 112, 255);
color: rgb(255, 255, 255);
cursor: pointer;
&:hover, :focus {
  background: rgb(11, 68, 205);
}

`