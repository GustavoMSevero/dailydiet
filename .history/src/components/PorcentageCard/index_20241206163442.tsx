import { Container, ArrowRightUp, PorcentageText, Subtitle } from './styles';

import arrowRightUp from '../../assets/arrowUpRight.png'
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    porcentage: string
}

export default function PorcentageCard({ porcentage, ...rest}: Props){
    return(
        <Container {...rest}>
            <ArrowRightUp source={arrowRightUp} />
            <PorcentageText>
                {porcentage}
            </PorcentageText>

            <Subtitle>
                da refeições dentro da dieta
            </Subtitle>
        </Container>
    );
}