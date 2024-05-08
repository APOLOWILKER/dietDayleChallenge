import logoImg from '@assets/logo/logo.png';
import { Container, Logo, UserImage } from "./styles";


export function Header() {
  return (
    <Container>  
      <Logo source={logoImg}/>
      <UserImage source={{ uri: 'https://github.com/APOLOWILKER.png' }}/>
    </Container>
  )
}