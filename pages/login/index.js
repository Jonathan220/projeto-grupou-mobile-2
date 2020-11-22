import React, {useState, useContext} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import { CaixaLogin, Container, LogoMarca, CaixaTextoLogo, TextoLogo, TextoLogoDestaque, Botao, TextoBotao, ContainerAba, TextoCampos, CampoTexto, CaixaBotoes, BotaoCadastro, TextoBotaoCadastro, EsqueceuSenha} from './styles';
import logoImg from "../../assets/logo.png";
import {UsuarioContext} from '../../contexts/user';

const Login = () => {
    const {signIn, signUp} = useContext(UsuarioContext);

    const [botaoAtual, setBotaoAtual] = useState('aluno');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [carregandoCadastro, setCarregandoCadastro] = useState(false);
    const [carregandoEntrada, setCarregandoEntrada] = useState(false);

    function handleSignIn(){
        try{
            signIn(email,password);
            console.warn(email, password);
            setCarregandoEntrada(true);
            setCarregandoCadastro(false);
        }catch(err){
            console.warn(err);
        }finally{
            setCarregandoEntrada(false);
        }
    }

    function handleSignUp(){
        try{
            signUp(email,password);
            console.warn(email, password);
            setCarregandoCadastro(true);
            setCarregandoEntrada(false);
            
        }catch(err){
            console.warn(err);
        }finally{
            setCarregandoCadastro(false);
        }
    }
    
  return (
    <Container>
        <LogoMarca>
            <Image source={logoImg} style={{width: 300, height: 100}}/>
        </LogoMarca>
        <CaixaTextoLogo>
            <TextoLogo>
                Problemas para formar um grupo de trabalho?
            </TextoLogo>
            <TextoLogo>
            O <TextoLogoDestaque>Grupou</TextoLogoDestaque> resolve!
            </TextoLogo>
        </CaixaTextoLogo>
        
        <CaixaLogin>
            <ContainerAba>
                <Botao onPress={()=>{setBotaoAtual('aluno')}} lastclick={botaoAtual == 'aluno' ? true : false}>
                    <TextoBotao lastclick={botaoAtual == 'aluno' ? true : false}>
                        Aluno
                    </TextoBotao>
                </Botao>
                <Botao onPress={()=>{setBotaoAtual('professor')}} lastclick={botaoAtual == 'professor' ? true : false}>
                    <TextoBotao lastclick={botaoAtual == 'professor' ? true : false}>
                        Professor
                    </TextoBotao>
                </Botao>
            </ContainerAba>
            
            <TextoCampos>
                E-mail:
            </TextoCampos>
            <CampoTexto placeholder="Digite o seu e-mail" onChangeText={ text => setEmail(text)}/>
            
            <TextoCampos>
                Senha:
            </TextoCampos>
            <CampoTexto  placeholder="Digite a sua senha:" secureTextEntry={true} onChangeText={ text => setPassword(text)}/>
            <EsqueceuSenha>Esqueci minha senha</EsqueceuSenha>
            <CaixaBotoes>
                <BotaoCadastro onPress={() => { handleSignUp() }}>
                {
                    carregandoCadastro ? <ActivityIndicator color="#AE1B73" /> :
                    <TextoBotaoCadastro>Cadastre-se</TextoBotaoCadastro>
                }
                </BotaoCadastro>
                <BotaoCadastro invert={true} onPress={() => { handleSignIn() }}>
                    {
                        carregandoEntrada ? <ActivityIndicator color="#fff" /> :
                        <TextoBotaoCadastro invert={true}>Entrar</TextoBotaoCadastro>
                    }
                </BotaoCadastro>
            </CaixaBotoes>

        </CaixaLogin>
    </Container>
  );
}

export default Login;