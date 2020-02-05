// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CodeEditor from './CodeEditor';
import BlockEditor from './BlockEditor';
import styled from 'styled-components';
import routes from '../constants/routes.json';

const ScreenContent = styled.div`
  width: 100%;
`;

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <ScreenContent data-tid="container">
        {/* <h2 contentEditable="true">Home</h2> */}
        {/* <CodeEditor /> */}
        {/* <Link to={routes.COUNTER}>to Counter</Link> */}
        <BlockEditor />
      </ScreenContent>
    );
  }
}
