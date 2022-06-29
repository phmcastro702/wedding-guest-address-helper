import React from 'react';
import styled from 'styled-components';
import { TitleBox } from './Components/TitleBox/index.jsx';
import { MainForm } from './Components/MainForm/index.jsx';

function App() {
  return (
    <div className="App">
      <OurContainer>
        <TitleBox content='Thaís e Paulo' />
        <OurBackground />
        <MainForm />
      </OurContainer>
    </div>
  );
}


const OurBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: gold;
`;

const OurContainer = styled.div`

    position: relative;
    text-align: center;
    display: grid;
    justify-items: center;

`;

export default App;
