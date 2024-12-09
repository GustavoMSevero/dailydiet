import { Container } from './styles';

import Header from '../../components/Header';
import PorcentageCard from '../../components/PorcentageCard';
import ButtonNewMeal from '../../components/ButtonNewMeal';
import Date from '../../components/Date';

export default function Home(){
    return(
        <Container>
            <Header />

            <PorcentageCard />

            <ButtonNewMeal
                title="+ Nova refeição"
                onPress={() => { }}
            />

            <Date
                text="12.08.22"
            />
        </Container>
    );
}