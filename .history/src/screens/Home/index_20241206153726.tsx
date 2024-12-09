import { Container } from './styles';

import Header from '../../components/Header';
import PorcentageCard from '../../components/PorcentageCard';
import ButtonNewMeal from '../../components/ButtonNewMeal';

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