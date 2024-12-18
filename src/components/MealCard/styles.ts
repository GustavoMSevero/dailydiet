import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    height: 45px;
    flex-direction: row;
    align-items: center;

`;

export const TimeText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};

    margin-left: 10px;
    margin-right: 10px;

`;

export const MealText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    margin-right: 60%;

`;

export const Dot = styled.Image`

`;