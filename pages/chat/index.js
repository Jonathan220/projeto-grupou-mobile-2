import React, {useContext, useState} from 'react';
import { Container, ContainerNome, TextoLogo, CaixaBotoes, BotaoCadastro, TextoBotaoCadastro, CampoTexto, ContainerMensagem, Mensagem, CaixaMensagemMaior, CaixaMensagem } from './style';
import {UsuarioContext} from '../../contexts/user';
import firebase from 'firebase';
import 'firebase/firestore';

const Chat = () => {
    const [mensagem, setMensagem] = useState(["um", "doi", "olá galera qunato tempo, como vão eestá tudo beeeeem?"]);
    const [mensagemEnviada, setMensagemEnviada] = useState("olá");

    const HandleMensagem = () => {
        if(mensagemEnviada == ""){
            console.warn("Prencha o campo");
            return
        }

        try {
            firebase.firestore().collection('mensagens').add(
                {
                    texto: mensagemEnviada,
                    lida: false,
                    autor: user.email
                }
            )
        } catch (error) {
            console.warn("erro de comunicação, tente mais tarde");
        }
    }

    const {user} =useContext(UsuarioContext);
    return (
        <Container>
            <ContainerNome>
                <TextoLogo>
                    {user.email}
                </TextoLogo>
            </ContainerNome>
            <ContainerMensagem>
                {mensagem.map(msg => 
                    <CaixaMensagemMaior>
                        <CaixaMensagem>
                            <Mensagem>
                                {msg}
                            </Mensagem>
                        </CaixaMensagem>  
                    </CaixaMensagemMaior>
                )}
            </ContainerMensagem>
            <CaixaBotoes >
                <CampoTexto placeholder="Digite sua mensagem..." value={mensagemEnviada} onChangeText={texto => setMensagemEnviada(texto)}/>
                <BotaoCadastro invert={true} onPress={()=>{HandleMensagem()}}>
                    {
                        <TextoBotaoCadastro invert={true}>Enviar</TextoBotaoCadastro>
                    }
                </BotaoCadastro>
            </CaixaBotoes>
        </Container>
    )
}

export default Chat;