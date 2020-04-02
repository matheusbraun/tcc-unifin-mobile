import React from 'react';
import { StatusBar } from 'react-native';
import Routes from '../../routes';

const AppContainer = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
    <Routes />
  </>
);

export default AppContainer;
