import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Text>IInit Project</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
