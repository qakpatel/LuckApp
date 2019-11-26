import { createStackNavigator } from 'react-navigation';
import Home from './dashboard';
import Login from './login'

const AppNavigator = createStackNavigator({
  Login:{ screen :Login},
  Home: { screen: Home },
});

export default AppNavigator;