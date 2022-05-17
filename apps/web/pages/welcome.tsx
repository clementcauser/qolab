import { Button, Container, styled, Text } from '@nextui-org/react';
import Icon, { AtIcon } from '@qolab/icons';
import { ReactComponent as PeopleCollaborating } from '../public/illustrations/people_collaborating.svg';

const Main = styled('main', {
  backgroundImage: '',
  minHeight: '100vh',
});

const Hero = styled('div', {
  position: 'relative',
  height: '300px',
});

const IllustrationContainer = styled('div', {
  position: 'absolute',
  right: 0,
  maxWidth: '60%',
  height: '100%',
});

export default function Welcome() {
  return (
    <Main>
      <Container>
        <Text span weight="bold" size="$lg">
          qolab
        </Text>
        <Hero>
          <Text
            h1
            size="4rem"
            weight="extrabold"
            css={{
              color: 'transparent',
              backgroundClip: 'text',
              maxWidth: '40%',
              backgroundImage:
                'linear-gradient(112deg, $primary500, $secondary500)',
              position: 'absolute',
              zIndex: 10,
            }}
          >
            Donnez vie à vos inspirations digitales
          </Text>
          <IllustrationContainer>
            <PeopleCollaborating />
          </IllustrationContainer>
        </Hero>
        <AtIcon />
        <Button>Embarquement</Button>
      </Container>
    </Main>
  );
}
