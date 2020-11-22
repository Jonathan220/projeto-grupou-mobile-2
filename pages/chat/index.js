import React, {useContext} from 'react';
import { Container, ContainerNome, TextoLogo } from './style';
import {UsuarioContext} from '../../contexts/user';

const Chat = () => {
    const {user} =useContext(UsuarioContext);
    return (
        <Container>
            <ContainerNome>
                <TextoLogo>
                    {user.email}
                </TextoLogo>
            </ContainerNome>
        </Container>
    )
}

export default Chat;