import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY_100};
  padding: 24px;

  align-items: center;
`