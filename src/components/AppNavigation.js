import { createStackNavigator, createAppContainer } from 'react-navigation';
import CompaniesScreen from 'screens/CompaniesScreen';
import DetailScreen from 'screens/DetailScreen';

const AppNavigator = createStackNavigator({
  Companies: {
    screen: CompaniesScreen,
    navigationOptions: {
      title: 'Companies',
    },
  },
  Detail: DetailScreen,
});

export default createAppContainer(AppNavigator);
