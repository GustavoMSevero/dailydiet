import { TouchableOpacityProps } from 'react-native';
import { Container,TextRefeicao, ButtonAdd, TextNewMeal } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export default function ButtonAddMeal({title, ...rest}: Props){
    return(
        <Container {...rest}>
            <TextRefeicao>
                Refeições
            </TextRefeicao>
            <ButtonAdd>
                <TextNewMeal>
                    {title}
                </TextNewMeal>
            </ButtonAdd>
        </Container>
    );
}