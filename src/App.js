import styled from "styled-components";
import { Amazon } from "styled-icons/fa-brands";
import "./App.css";

function App() {
  return (
    <RootContainer className="App">
      <h1>
        Hello I am inside styled component
        {<RedAmazon size="48" title="Amazon Logo" />}
      </h1>
      <h2>hello Bhaia</h2>
    </RootContainer>
  );
}

export default App;

const RootContainer = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const RedAmazon = styled(Amazon)`
  color: red;
`;
