import React, {useContext} from 'react';
import {CaixaBotoes, BotaoCadastro, TextoBotaoCadastro, Container} from './style';
import {UsuarioContext} from '../../contexts/user';


const Settings = () => {
    const {signOut} = useContext(UsuarioContext);
    return (
        <Container>
            <CaixaBotoes >
                <BotaoCadastro invert={true} onPress={()=>{signOut()}}>
                    {
                        <TextoBotaoCadastro invert={true}>Sair</TextoBotaoCadastro>
                    }
                </BotaoCadastro>
            </CaixaBotoes>
        </Container>
    )
}

export default Settings;