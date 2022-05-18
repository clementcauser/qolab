import { Container, Grid, styled, Text } from '@nextui-org/react';
import { Button } from '@qolab/uikit';
import Link from 'next/link';
import { ReactComponent as PeopleCollaborating } from '../public/illustrations/people_collaborating.svg';
import { Routes } from '../routes';

const Main = styled('main', {
  minHeight: '100vh',
});

const GridContainer = styled(Grid.Container, {
  position: 'relative',
});

export default function Welcome() {
  return (
    <Main>
      <Container>
        <Text span weight="bold" size="$lg">
          qolab
        </Text>
        <GridContainer>
          <div style={{ maxWidth: '50%' }}>
            <PeopleCollaborating />
          </div>
          <Text
            h1
            size="$xl"
            weight="extrabold"
            css={{
              textGradient: '112deg, $primary500, $secondary500',
              position: 'absolute',
              left: 0,
            }}
          >
            Donnez vie à vos inspirations digitales
          </Text>
        </GridContainer>
        <Link href={Routes.HOME} passHref>
          <a>
            <Button>Embarquement</Button>
          </a>
        </Link>
      </Container>
    </Main>
  );
}
