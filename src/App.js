import React, { Component } from 'react';
import styled from 'styled-components';
import MdSupervisorAccount from 'react-icons/lib/md/supervisor-account';


const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
flex: 1;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 4px;
margin: 20px 20px;
width: 300px;
height: 250px;
padding-top: 22px;
padding-bottom: 22px;
`;

const Add = styled.button`
width: 32px;
height: 32px;
border-radius: 50%;
cursor: pointer;
background: transparent;
border: 1px solid #008489;
color: #008489;
font-weight: bold;
`;

const Cancel = styled.button`
color: #484848;
background: transparent;
border: none;
text-align: left;
font: inherit;
:hover {
  text-decoration: underline;
}
`;

const Apply = styled.button `
color: #008489;
background: transparent;
border: none;
text-align: left;
font: inherit;
:hover {
  text-decoration: underline #008489;
}
`;

const Bla = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: baseline;
`;

const Control = styled.div `
display: flex;
justify-content: space-between;
`;

const Item = styled.div`
line-height: 3px;
h3 {
  font-size: 19px;
}
p {
  font-size: 15px;
}
`;

const Guests = styled.button `
font-size: 15px;
line-height: 18px;
color: #484848;
background: #ffffff;
border-radius: 4px;
outline: none;
padding: 11px 12px;
width: 20%;
border: 1px solid rgba(0, 0, 0, 0.2);
margin: 20px 20px;
display: flex;
align-items: flex-start;
:focus {
  border-bottom: 2px solid #008489;
}
`;



const Content = styled.div`
display: block;

`;


class App extends Component {

render(){
  return(
    <div>

    <Guests>
    <MdSupervisorAccount
    size={30}/>
    1 guest</Guests>

    <Content>
    <Container>
      <Bla>
        <h3>Adults</h3>
        <Add>-</Add>
        <p>1</p>
        <Add>+</Add>
      </Bla>

      <Bla>
      <Item>
        <h3>Children</h3>
        <p>Ages 2 - 12</p>
      </Item>
        <Add>-</Add>
        <p>0</p>
        <Add>+</Add>
      </Bla>

      <Bla>
      <Item>
        <h3>Infants</h3>
        <p>Under 2</p>
      </Item>
        <Add>-</Add>
        <p>0</p>
        <Add>+</Add>
      </Bla>

      <Control>
        <Cancel>Cancel</Cancel>
        <Apply>Apply</Apply>
      </Control>

    </Container>
    </Content>
    </div>
  );
}

}
export default App;
