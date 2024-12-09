import { Container, DateText } from './styles';

type Props = {
    text: string;
}

export default function Date({ text }: Props){
    return(
        <Container>
            <DateText>
                {text}
            </DateText>
        </Container>
    );
}