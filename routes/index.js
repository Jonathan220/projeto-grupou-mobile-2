import React, { useContext } from 'react';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { NavigationContainer} from '@react-navigation/native';
import {UsuarioContext} from '../contexts/user';

const Routes = () => {
    const {user} = useContext(UsuarioContext);
    return(
        <NavigationContainer>
            {
                user ? <AppRoutes /> : <AuthRoutes />
            }
        </NavigationContainer>
    )
}

export default Routes;