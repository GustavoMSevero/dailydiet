import { TouchableOpacityProps } from 'react-native';
import { Container,TextRefeicao, ButtonAdd, TextNewMeal } from './styles';

type Props = TouchableOpacityProps & {
    
}

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