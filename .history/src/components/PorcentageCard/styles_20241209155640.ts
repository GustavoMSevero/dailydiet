import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 90%;
    height: 120px;
    margin-top: 30px;

    align-items: center;
    justify-content: center;

    background-color:${({ theme }) => theme.COLORS.GREEN_MID};
    border-radius: 6px;
`;

export const ArrowRightUp = styled.Image`
    width: 20px;
    height: 10px;
    margin-left: 80%;
`;

export const PorcentageText = styled.Text`
    color: black;
    font-size: 32px;

`;

export const Subtitle = styled.Text`
    color: black;
`;