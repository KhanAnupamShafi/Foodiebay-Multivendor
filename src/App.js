import styled from "styled-components";
import { Amazon } from "styled-icons/fa-brands";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>hello anupam bhai</p>
    </div>
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
