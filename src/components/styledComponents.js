import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: solid 2px black;
  width: 100;
  padding: 10px;
  margin: 10px;

`;

export const Title = styled.h1`
  background: blue;
  width: 50%;
`;

export const Btn = styled.button`
background : white;
  color: purple;
  margin-right: 10px;
  width: 90px;

  ${props => props.primary && `
  background: purple;
  color: white;
`}
`;

export const Wrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin: 10px; 
`;


export const Input = styled.input `
    color : red; 
   

 `
export const Textarea = styled.textarea `
    width : 50%;
    margin-top: 20px;


    
}`
