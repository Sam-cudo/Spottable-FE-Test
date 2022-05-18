import React from 'react';
import styled from 'styled-components';
import MainBox from './components/MainBox';
import MainHeader from './components/MainHeader';

const Page = styled.div`
display: flex;
flex-direction: column;
background-color: #f7f9ff;
height: 100vh;
`

function App() {
  return (
    <Page>
      <MainHeader />
      <MainBox />
    </Page>
  );
}

export default App;
