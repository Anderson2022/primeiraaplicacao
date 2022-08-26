import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
height: 100vh;
width: 100%;
`;

export const Content = styled.div`

gap: 10px
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
background-color:  #2F343C;
max-width: 400px;
height: 60vh;
padding: 20px;
border-radius: 5px;
margin-top: -5px;
`;

export const Label = styled.label`

font-size: 18px;
font-weight: 600;
color: #676767;

`;

export const LabelSignin = styled.label`
font-size: 16px;
color: red;

`;
export const labelError = styled.label`
font-size: 14px;
color: red;

`;
export const Strong = styled.strong`
cursor: pointer;

    a {
text-decoration: Name;
color: #676767
}
`;

