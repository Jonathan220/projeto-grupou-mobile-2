import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #5db0e8;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 20px;
`;
export const Titulo = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
`
export const TituloGrupo = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 18px;
    flex: 3;
`
export const TextoBotao = styled.Text`
    color: #AE1B73;
    font-size: 12px;
`
export const CaixaGrupo = styled.View`
    background-color: #fff;
    border-radius: 10px;
    flex: 1;
    width: 100%;
    max-height: 30%;
    margin: 20px;
    flex-direction: row;
    padding: 20px;
`
export const BotaoCadastro = styled.TouchableOpacity`
    background-color: #fff;
    border: 1px solid #AE1B73;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    flex: 2;
`