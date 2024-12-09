import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    height: 45px;
    flex-direction: row;

    align-items: center;

    border-radius: 6px;
    border-style: dotted;
    border-color: gray;
`;

export const TimeText = styled.Text`
    color: black;
    font-size: 12px;
    font-weight: bold;

    margin-left: 10px;
    margin-right: 10px;

`;

export const MealText = styled.Text`
    color: black;
    font-size: 14px;
    margin-right: 60%;

`;

export const Dot = styled.Image`

`;