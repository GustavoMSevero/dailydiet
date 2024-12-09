import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    height: 30px;

    margin-top: 50px;
`;

export const TextRefeicao = styled.Text`
    color: black;
    font-size: 16px;
`;

export const ButtonAdd = styled(TouchableOpacity)`
    height: 60px;
    background-color: black;

    align-items: center;
    justify-content: center;

    border-radius: 6px;
`;

export const TextNewMeal = styled.Text`
    color: white;
    font-weight: bold;
`;