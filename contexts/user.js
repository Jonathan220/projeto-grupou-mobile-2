import React, {createContext} from 'react';
import { useState, useEffect } from 'react';
import 'firebase/auth';
import firebase from 'firebase';

const UsuarioContext = createContext({});

const UsuarioProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    
    const ListenAuth = (userState) =>{
        setUser(userState);
    }

    useEffect(()=>{
        const listener = firebase.auth().onAuthStateChanged(ListenAuth);
        return listener;
    }, [])

    const signIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(resp =>{
            // console.warn(resp);
        }).catch(err => {
            console.warn(err);
        })
    }
    
    const signUp = (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(resp =>{
            // console.warn(resp);
        }).catch(err => {
            console.warn(err);
        })
    }

    const signOut = () => {
        firebase.auth().signOut().then(resp =>{
            console.warn('Usuário deslogado com sucesso!');
        }).catch(err => {
            console.warn(err);
        })
    }

    return(
        <UsuarioContext.Provider value={{ user, signIn, signUp, signOut }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext, UsuarioProvider}