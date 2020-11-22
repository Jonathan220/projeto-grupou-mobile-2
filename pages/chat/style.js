import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #5db0e8;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

export const ContainerNome = styled.View`
    background-color: #AE1B73;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
`
export const TextoLogo = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
`

export const CaixaBotoes = styled.View`
    flex-direction: row;
    align-items: center;
    width:100%;
`
export const BotaoCadastro = styled.TouchableOpacity`
    background-color: ${props => props.invert ? "#AE1B73" : "#fff"};
    border: 1px solid #AE1B73;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    flex: 1;
`

export const TextoBotaoCadastro = styled.Text`
    color: ${props => props.invert ? "#fff" : "#ae1b73"};
    font-size: 16px;
    font-weight: bold;
`

export const CampoTexto = styled.TextInput`
    height: 60px;
    border-color: #ccc;
    border-width: 1px;
    padding: 8px 5px;
    margin: 6px 5px;
    border-radius: 5px;
    flex: 3;
    background-color: #fff;
`
export const ContainerMensagem = styled.View`
    flex: 1;
`

export const Mensagem = styled.Text`
    font-size: 14px;
`


export const CaixaMensagemMaior = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`

export const CaixaMensagem = styled.View`
    background-color: #ccc;
    width: 80%;
    padding: 20px;
    border-radius: 5px;
    flex-direction: row;
`
export const AutorMensagem = styled.Text`

`