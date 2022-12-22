import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "./AppLayout";
import styled from "@emotion/styled";

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <StyledApp className="App">
      <ChakraProvider>
        <AppLayout />
      </ChakraProvider>
    </StyledApp>
  );
}

export default App;
