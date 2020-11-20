import React from 'react';
import { CaixaLogin, Container, LogoMarca, CaixaTextoLogo, TextoLogo, TextoLogoDestaque, Botao, TextoBotao, ContainerAba, TextoCampos, CampoNome, CampoSenha } from './styles';

const Login = () => {
  return (
    <Container>
        <LogoMarca>
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
                <Botao>
                    <TextoBotao>
                        Aluno
                    </TextoBotao>
                </Botao>
                <Botao>
                    <TextoBotao>
                        Professor
                    </TextoBotao>
                </Botao>
            </ContainerAba>
            <TextoCampos>
                Nome:
            </TextoCampos>
            <CampoNome>
            </CampoNome>
            <TextoCampos>
                Senha:
            </TextoCampos>
            <CampoSenha>
                
            </CampoSenha>

        </CaixaLogin>
    </Container>
  );
}

export default Login;