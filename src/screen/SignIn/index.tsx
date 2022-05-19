import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import {
  Container,
  Content,
  Brand,
  TitleLogin,
  ButtonForgotPassword,
  Footer,
  FooterWrapper,
  ImageContainer,
  TitleButton,
  IsLoading,
} from "./styles";
import BrandImg from "../../assets/logo.png";
import GoogleSvg from "../../assets/google.svg";
import AppleSvg from "../../assets/apple.svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { SignInSocialButton } from "../../components/SignInSocialButton";
import theme from "../../global/styles/theme";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Google");
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Apple");
      setIsLoading(false);
    }
  }
  return (
    <Container>
      <Content>
        <ImageContainer>
          <Brand source={BrandImg} />
        </ImageContainer>

        <Footer>
          <TitleLogin>
            Faça seu login com {"\n"}
            uma das contas abaixo
          </TitleLogin>
          <FooterWrapper>
            <SignInSocialButton
              onPress={handleSignInWithGoogle}
              title="Entrar com o Google"
              svg={GoogleSvg}
            />
            {Platform.OS === "ios" && (
              <SignInSocialButton
                onPress={handleSignInWithApple}
                title="Entrar com a Apple"
                svg={AppleSvg}
              />
            )}
          </FooterWrapper>

          
        </Footer>
        <IsLoading>
            {isLoading && (
              <ActivityIndicator
                color={theme.colors.shape}
              />
            )}
          </IsLoading>
      </Content>
    </Container>
  );
}
