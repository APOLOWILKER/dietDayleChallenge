import { DietPercentFeedback } from "@components/DietPercentFeedback";
import { Header } from "@components/Header";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <DietPercentFeedback />
    </Container>
  );
}
