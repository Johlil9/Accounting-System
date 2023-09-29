import React, { useState } from 'react'
import styled from 'styled-components';
import Navigation from './components/navigation/Navigation'
import { MainLayout } from './styles/Layout'
function App() {
  const [active, setActive] = useState(1)
  return (
    <AppStyled className = "App">
      <MainLayout>
        <Navigation active = {active} setActive = {setActive} />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: gray;
`;

export default App;
