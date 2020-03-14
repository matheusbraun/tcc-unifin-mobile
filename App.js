import React from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import AppContainer from './AppContainer';

export default function App() {
  return (
    <ActionSheetProvider>
      <AppContainer />
    </ActionSheetProvider>
  );
}
