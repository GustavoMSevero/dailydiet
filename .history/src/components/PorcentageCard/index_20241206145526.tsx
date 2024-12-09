import { Container, ArrowRightUp, PorcentageText, Subtitle } from './styles';

import arrowRightUp from '../../assets/arrowUpRight.png'

export default function PorcentageCard(){
    return(
        <Container>
            <ArrowRightUp source={arrowRightUp} />
            <PorcentageText>
                90,86%
            </PorcentageText>

            <Subtitle>
                da refeições dentro da dieta
            </Subtitle>
        </Container>
    );
}