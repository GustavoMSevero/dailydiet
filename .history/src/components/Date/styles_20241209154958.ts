import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 50px;

    margin-top: 90px;
    margin-left: 11%;
`;

export const DateText = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_1};
    font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
`;