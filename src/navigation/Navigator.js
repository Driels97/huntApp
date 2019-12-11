import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Main from '../pages/Main';

const stackNav =  createStackNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            headerTitle: 'JSHunt',
            headerTitleStyle: {
                textAlign: 'center',
                flex: 1
            }
        }
    }
},
    {
defaultNavigationOptions: {
    headerStyle: {
        backgroundColor: '#DA552F'
    },
    headerTintColor: '#FFFFFF'
}
});

export default createAppContainer(stackNav);
