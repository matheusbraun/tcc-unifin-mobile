import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Form from './pages/Form';
import Details from './pages/Details';
import Filter from './pages/Filter';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: 'TccUnifin',
        },
      },
      Form: {
        screen: Form,
        navigationOptions: {
          title: 'Cadastro',
        },
      },
      Details: {
        screen: Details,
        navigationOptions: {
          title: 'Detalhes',
        },
      },
      Filter: {
        screen: Filter,
        navigationOptions: {
          title: 'Filtro',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#7D40E7',
        },
      },
    },
  ),
);

export default Routes;
