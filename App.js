import React from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import AppContainer from './src/components/AppContainer';
import FilterProvider from './src/context/filter';

export default function App() {
  return (
    <FilterProvider>
      <ActionSheetProvider>
        <AppContainer />
      </ActionSheetProvider>
    </FilterProvider>
  );
}
