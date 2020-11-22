import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';


import Routes from './routes';
import './services/firebase';
import {UsuarioProvider} from './contexts/user';

export default function App() {
  return (
    <UsuarioProvider>
      <Routes />
    </UsuarioProvider>
  );
}

