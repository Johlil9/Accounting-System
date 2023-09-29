import styled from 'styled-components';
import { MainLayout } from './styles/Layout'
function App() {
  return (
    <AppStyled className = "App">
      <MainLayout>
      <h1>Hellowe</h1>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
`;

export default App;
