import React, {useContext, useState, useEffect} from 'react';
import { Container, ContainerNome, TextoLogo, CaixaBotoes, BotaoCadastro, TextoBotaoCadastro, CampoTexto, ContainerMensagem, Mensagem, CaixaMensagemMaior, CaixaMensagem, AutorMensagem } from './style';
import {UsuarioContext} from '../../contexts/user';
import firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';


const Chat = ({navigation}) => {
    let dataAtual = new Date();
    const [mensagem, setMensagem] = useState([]);
    const [mensagemEnviada, setMensagemEnviada] = useState("");
    
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
                    autor: user.email,
                    data: dataAtual.getDate() + "/" + dataAtual.getMonth() +"/" + dataAtual.getFullYear() + " - " + dataAtual.getHours() + ":" + dataAtual.getMinutes()
                }
            )
            setMensagemEnviada("");
        } catch (error) {
            console.warn("erro de comunicação, tente mais tarde");
        }
    }

    const ListenUpdateMenssages = (snap) =>{
        const data = snap.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        })
        setMensagem(data);
    }
    useEffect(() => {
        const listener = firebase.firestore().collection("mensagens").orderBy("data", "asc").onSnapshot(ListenUpdateMenssages);
    },[]);
    
    const {user} =useContext(UsuarioContext);
    return (
        <Container>
            <ContainerNome>
                <TextoLogo>
                    {user.email}
                </TextoLogo>
            </ContainerNome>
            <ContainerMensagem>
                <ScrollView>
                    {mensagem.map(msg => (msg.autor==user.email ?
                        <CaixaMensagemMaior key={msg.key} autorMsg={true}>
                            <CaixaMensagem autorMsg={true}>
                                <AutorMensagem>
                                    {msg.autor} : {msg.data}
                                </AutorMensagem>
                                <Mensagem>
                                    {msg.texto}
                                </Mensagem>
                            </CaixaMensagem>  
                        </CaixaMensagemMaior>
                        :
                        <CaixaMensagemMaior autorMsg={false}>
                            <CaixaMensagem autorMsg={false}>
                                <AutorMensagem>
                                    {msg.autor} : {msg.data} 
                                </AutorMensagem>
                                <Mensagem>
                                    {msg.texto}
                                </Mensagem>
                            </CaixaMensagem>  
                        </CaixaMensagemMaior>    
                        )
                    )}
                </ScrollView>
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