import { Container, Profile, Logo } from './styles';

import profile from '../../assets/ellipse.png';
import fork from '../../assets/fork.png';

export default function Header(){
    return(
        <Container>
            <Logo source={fork} />
            <Profile source={profile} />
        </Container>
    );
}