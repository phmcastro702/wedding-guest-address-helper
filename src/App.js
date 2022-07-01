import React from 'react';
import styled from 'styled-components';
import { TitleBox } from './Components/TitleBox/index.jsx';
import { MainForm } from './Components/MainForm/index.jsx';
import { NewHopeForm } from './Components/NewHopeForm/index.jsx';
require('dotenv').config();

function App() {
  return (
    // <div className="App">
      <OurContainer>
        <TitleBox content='Thaís e Paulo' />
        <NewHopeForm />
      </OurContainer>
    // </div>
  );
}


const OurBackground = styled.div`
    width: 100%;
    height: 100vh;
    background-color: gold;
`;

const OurContainer = styled.div`
    /* height: 100vh; */
    width: 100%;
    height: ${window.innerHeight}px;
    top: 0;
    bottom: 0;
    background-color: gold;
    position: absolute;

    /* position: relative; */
    /* text-align: center; */
    /* display: grid; */
    /* grid-template-columns: repeat(6, 1fr); */
    /* grid-template-rows: repeat(6, 1fr); */
    /* justify-items: center; */
    /* align-items: center; */
`;

export default App;
