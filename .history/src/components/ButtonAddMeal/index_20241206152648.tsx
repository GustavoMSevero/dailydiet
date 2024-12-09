import { TouchableOpacityProps } from 'react-native';
import { Container,TextRefeicao, ButtonAdd, TextNewMeal } from './styles';

type Props = TouchableOpacityProps & {
    
}

export default function ButtonAddMeal({...rest}){
    return(
        <Container {...rest}>
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