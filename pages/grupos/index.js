import React, {} from 'react';
import { BotaoCadastro, CaixaGrupo, Container, TextoBotao, Titulo, TituloGrupo } from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../chat';
import Chat2 from '../Chat2';

const Stack = createStackNavigator();

const Grupos = () => {
    return(
            <Stack.Navigator>
                <Stack.Screen name="Grupos" component={ListaDeGrupos} />
                <Stack.Screen name="Gestão de design" component={Chat} />
                <Stack.Screen name="Fotografia" component={Chat2} />
            </Stack.Navigator>
            
    )
}
function ListaDeGrupos({navigation}){
    return(
        <Container>
                <CaixaGrupo
                style={
                    {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        
                        elevation: 5
                    }
                }
                >
                    <TituloGrupo>Gestão de design</TituloGrupo>
                    <BotaoCadastro onPress={() => navigation.push("Gestão de design")}>
                        <TextoBotao>Veja mais</TextoBotao>
                    </BotaoCadastro>
                </CaixaGrupo>

                <CaixaGrupo
                style={
                    {
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        
                        elevation: 5
                    }
                }
                >
                    <TituloGrupo>Fotografia</TituloGrupo>
                    <BotaoCadastro onPress={() => navigation.push("Fotografia")}>
                        <TextoBotao>Veja mais</TextoBotao>
                    </BotaoCadastro>
                </CaixaGrupo>
            </Container>
    )
}
export default Grupos;