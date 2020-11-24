import React, {} from 'react';
import Settings from '../pages/Settings';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Grupos from '../pages/grupos';



const tab = createBottomTabNavigator();

const AppRoutes = () => {
    return(
            <tab.Navigator
            initialRouteName="Configurações"
            tabBarOptions={
                {
                    activeTintColor:"tomato",
                    inactiveTintColor:"#ccc"
                }
            }
        >
            <tab.Screen 
                name="Grupos" 
                component={Grupos}
                options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name='chat' size={32} color={color}/>
                    )
                    }
                }
            />
            <tab.Screen 
                name="Configurações"
                component={Settings}
                options={{
                    tabBarIcon: ({color}) =>(
                        <MaterialCommunityIcons name='settings' size={32} color={color}/>
                    )
                }}
            />
        </tab.Navigator>
    )
}


export default AppRoutes;