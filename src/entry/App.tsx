import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { createGlobalStyle } from 'styled-components';
import { HexRouterComponentProps, Router } from '../lib/Router';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #FFFFFA;
    h1 {
      text-align: center;
      color: #070707;
      font-size: 36px;
    }
  }
`;

class TestClassComponent extends React.PureComponent<HexRouterComponentProps, {}> {
  render(){
    return (
      <h1>Class Component Works!</h1>
    )
  }
}

const TestFuncComponent = (_: HexRouterComponentProps) => {
  return (
    <>
      <h1>Functional Component Works!</h1>
    </>
  )
};
const App = hot(() => (
  <>
    <GlobalStyle />
    <Router>
      <h1>H1 Element Works!</h1>
      <TestFuncComponent route="/home"/>
      <TestClassComponent route="/hey"/>
    </Router>
  </>
));

export default App;
