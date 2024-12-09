import { Container } from './styles';

import Header from '../../components/Header';
import PorcentageCard from '../../components/PorcentageCard';
import ButtonNewMeal from '../../components/ButtonNewMeal';
import Date from '../../components/Date';
import MealCard from '../../components/MealCard';

export default function Home(){
    return(
        <Container>
            <Header />

            <PorcentageCard
                porcentage="90,86%"
                onPress={() => { }}
            />

            <ButtonNewMeal
                title="+ Nova refeição"
                onPress={() => { }}
            />

            <Date
                text="12.08.22"
            />

            <MealCard
                timeText="20:00"
                mealText="X-tudo"
            />
        </Container>
    );
}