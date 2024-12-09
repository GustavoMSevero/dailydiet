import { Container,TextRefeicao, ButtonAdd, TextNewMeal } from './styles';

export default function ButtonAddMeal(){
    return(
        <Container>
            <TextRefeicao>
                Refeições
            </TextRefeicao>
            <ButtonAdd>
                <TextNewMeal>
                    + Nova refeição
                </TextNewMeal>
            </ButtonAdd>
        </Container>
    );
}