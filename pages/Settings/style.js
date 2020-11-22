import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #5db0e8;
    flex: 1;
    padding: 0px 10px;
    justify-content: center;
    align-items: center;
`;
export const TextoLogo = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 18px;
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