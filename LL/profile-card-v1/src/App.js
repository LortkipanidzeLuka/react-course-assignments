import React from 'react';
import ProfileCard from './components/ProfileCard';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 92vh;
  background: #f5f5f5;
  padding: 20px;
`;

function App() {
  return (
      <AppContainer>
        <ProfileCard />
      </AppContainer>
  );
}

export default App;