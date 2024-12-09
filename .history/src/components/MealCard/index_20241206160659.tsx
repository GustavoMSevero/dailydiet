import { Container, TimeText, MealText, Dot } from './styles';

import pinkStatus from '../../assets/pinkStatus.png'

export default function MealCard(){
    return(
        <Container>
            <TimeText />

            <MealText />

            <Dot
                source={pinkStatus}
            />
        </Container>
    );
}