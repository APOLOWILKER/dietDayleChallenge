import { ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const CardContainer = styled.View`
  width: 327px;
  height: 102px;
  border-radius: 8px;
  background-color: ${({ theme}) => theme.COLORS.PRODUCT.GREEN_100};


  align-items: center;
  justify-content: center;
  padding: 12px 8px;
`;

export const PercentageText = styled.Text`
  ${({ theme}) => css`
    font-size: ${theme.FONT_SIZE.XXXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${({theme}) => theme.COLORS.BASE.GRAY_700};
  `};
`;

export const SubTitle = styled.Text`
  ${({ theme}) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;


export const GoButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const GoIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.PRODUCT.GREEN_600,
}))``;

