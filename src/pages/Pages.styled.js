import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;
export const WrapAppBar = styled.div`
display: flex;
width: 100%;
height: 10vh;
background-color: #3d5afe;
;
`;
export const WrapOutlet = styled.div`
display: flex;
width: 100%;
height: 90vh;
`
export const WrapNavigator = styled.div`
display: flex;
justify-content: center;
align-items: center;
.navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: #0d47a1;
    }
  }

`