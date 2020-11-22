import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #5db0e8;
    flex: 1;
    padding: 0px 10px;
    justify-content: flex-end;
`;

export const CaixaLogin = styled.View`
    background-color: #fff;
    height: 55%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    margin: 0px 5px;
    padding: 10px;
`

export const LogoMarca = styled.View`
    flex:2;
    justify-content: center;
    align-items: center;
`
export const CaixaTextoLogo = styled.View`
    flex:1;
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
`
export const TextoLogo = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
`
export const TextoLogoDestaque = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`
export const Botao = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom-width: 3px;
    border-bottom-color: ${props => props.lastclick ? "#AE1B73" : "#fff"};
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 3px;
    margin-right: 3px;
`
export const TextoBotao = styled.Text`
    font-size: 20px;
    color: ${props => props.lastclick ? "#AE1B73" : "#ccc"};
`
export const ContainerAba = styled.View`
    flex-direction: row;
`
export const CampoTexto = styled.TextInput`
    height: 50px;
    border-color: #ccc;
    border-width: 1px;
    padding: 8px 5px;
    margin: 6px 20px;
    border-radius: 5px;
`

export const TextoCampos = styled.Text`
    margin: 3px 20px;
    font-size: 16px;
    color: #ccc;
`
export const CaixaBotoes = styled.View`
    flex-direction: row;
    margin: 0px 15px;
`
export const BotaoCadastro = styled.TouchableOpacity`
    background-color: ${props => props.invert ? "#AE1B73" : "#fff"};
    border: 1px solid #AE1B73;
    height: 55px;
    flex: 1;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
`

export const TextoBotaoCadastro = styled.Text`
    color: ${props => props.invert ? "#fff" : "#ae1b73"};
    font-size: 16px;
    font-weight: bold;
`
export const EsqueceuSenha = styled.Text`
    color: #AE1B73;
    text-align: right;
    font-size: 14px;
    margin: 3px 20px;
`