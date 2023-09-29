import styled from 'styled-components';
import Navigation from './components/navigation/Navigation'
import { MainLayout } from './styles/Layout'
function App() {
  return (
    <AppStyled className = "App">
      <MainLayout>
        <Navigation/>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: gray;
`;

export default App;
