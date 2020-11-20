import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #5db0e8;
    flex: 1;
    padding: 0px 10px;
    justify-content: flex-end;
`;

export const CaixaLogin = styled.View`
    background-color: #fff;
    height: 60%;
    border-top-left-radius: 25;
    border-top-right-radius: 25;
    border-bottom-left-radius: 25;
    border-bottom-right-radius: 25;
    margin: 5px;
`

export const LogoMarca = styled.View`
    background-color: yellow;
    flex:2;
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
    height: 50px;
    border-bottom-width: 3px;
    border-bottom-color: #AE1B73;
    margin: 6px;
`
export const TextoBotao = styled.Text`
    font-size: 22px;
    color: #AE1B73;
`
export const ContainerAba = styled.View`
    flex-direction: row;
`
export const CampoNome = styled.TextInput`
    height: 50px;
    width: 100%
    background-color: pink;
    border-color: black;
    border-width: 1px;
`
export const CampoSenha = styled.TextInput`
    height: 50px;
    width: 100%
    background-color: pink;
    border-color: black;
    border-width: 1px;
`
export const TextoCampos = styled.Text`

`