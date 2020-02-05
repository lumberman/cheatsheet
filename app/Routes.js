import React from 'react';
import { Switch, Route } from 'react-router';
import styled, { createGlobalStyle } from 'styled-components';
import theme from './components/Theme'
import Add from 'react-vscode-icons/es/Add';
import Search from 'react-vscode-icons/es/Search';
import Octoface from 'react-vscode-icons/es/Octoface';
import SettingsGear from 'react-vscode-icons/es/SettingsGear';
import SideBar from './components/Sidebar';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

// Initialize Block for the Block Editor.
import { registerCoreBlocks } from '@wordpress/block-library';

registerCoreBlocks();

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color:#fff;
  }
`;


const Title = styled.div`
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  /* background: #191919; */
  display: flex;
  /* border-bottom: solid 1px #131313; */

  -webkit-app-region: drag;
`;


const AppContainer = styled.div`
  width: 100%;
  /* height: calc( 100% - 40px ); */
  height: 100%;
  background: gray;
  position: absolute;
  left: 0;
  top: 0;
  /* padding-top: 40px; */

  display: flex;
`;

const ActivityBar = styled.section`
  flex-shrink: 0;
  width: 180px;
  height: calc( 100% - 40px );
  left: 0;
  top: 0;
  padding-top: 40px;

  color: #CDCDCD; // icon color
  /* text-align: center; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 10px 20px;
    display: flex;
    align-items: center;

    svg {
      font-size: 24px;
      line-height: 1;
      margin-right: 14px;
    }

    &.active {
      background: ${theme.activityBarItemHighlight};
    }
  }

  background: ${theme.activityBarBackground};
  border-right: 1px solid rgba(0,0,0,.5);
`;

const Screen = styled.section`
  padding: 24px;
  padding-top: 40px;
  width:100%;

  background: ${theme.sidebarBackground};
`;


export default () => (
  <AppContainer>
    <GlobalStyle />
    <Title></Title>
    <App>
      <ActivityBar>
        <ul>
          <li className="active">
            <Add /> Add New
          </li>
          <li>
            <Search /> Search
          </li>
          <li>
            <Octoface /> Gists
          </li>
        </ul>
        <ul>
          <li>
            <SettingsGear /> Settings
          </li>
        </ul>
      </ActivityBar>
      <SideBar />
      <Screen>
        <Switch>
            <Route path={routes.COUNTER} component={CounterPage} />
            <Route path={routes.HOME} component={HomePage} />
        </Switch>
      </Screen>
    </App>
  </AppContainer>
);
