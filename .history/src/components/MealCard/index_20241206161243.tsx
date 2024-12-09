import { Container, TimeText, MealText, Dot } from './styles';

import pinkStatus from '../../assets/pinkStatus.png'

type Props = {
    timeText: string;
    mealText: string;
}

export default function MealCard({ timeText, mealText }: Props){
    return(
        <Container>
            <TimeText />
                {timeText} |
            <MealText />
                {mealText}
            <Dot
                source={pinkStatus}
            />
        </Container>
    );
}