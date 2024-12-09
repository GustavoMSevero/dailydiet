import { Container } from './styles';

import Header from '../../components/Header';
import PorcentageCard from '../../components/PorcentageCard';
import ButtonAddMeal from '../../components/ButtonAddMeal';

export default function Home(){
    return(
        <Container>
            <Header />

            <PorcentageCard />

            <ButtonAddMeal
                title="+ Nova refeição"
                onPress={() => { }}
            />
        </Container>
    );
}