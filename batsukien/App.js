
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Home';
import DetailScreen from './Detail';
import DangkiScreen from './Dangki';

const AppNavigation = createStackNavigator({
  Home: HomeScreen,
  Detail: DetailScreen,
  Dangki: DangkiScreen,
 
});
export default createAppContainer(AppNavigation);