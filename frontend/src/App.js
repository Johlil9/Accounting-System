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
        <main>
          
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: gray;
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
