import { Container, ArrowRightUp, PorcentageText, Subtitle } from './styles';

import arrowRightUp from '../../assets/arrowUpRight.png'
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {

}

export default function PorcentageCard({ ...rest}: Props){
    return(
        <Container {...rest}>
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