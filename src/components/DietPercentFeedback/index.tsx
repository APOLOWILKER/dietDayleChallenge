import { BackButton, BackIcon, CardContainer, GoButton, GoIcon, HeaderContainer, PercentageText, SubTitle } from "./styles";


type Props = {
  isHeader?: boolean;
}

export function DietPercentFeedback({ isHeader = false}: Props) {
  return (
    <>
    {
      isHeader ? 
      (
        <HeaderContainer>
          <BackButton>
            <BackIcon />
          </BackButton>
      
          <PercentageText>93%</PercentageText>
          <SubTitle>das refeições dentro da dieta</SubTitle> 
        </HeaderContainer>
      ) :

      (
        <CardContainer>

          <GoButton>
            <GoIcon />
          </GoButton>

          <PercentageText>100%</PercentageText>
          <SubTitle>das refeições dentro da dieta</SubTitle>

         
        </CardContainer>
      )
    }
    </>
  )
}