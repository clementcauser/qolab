import { Routes } from '@qolab/constants';
import { BulbIcon, CodeIcon } from '@qolab/icons';
import {
  Button,
  Card,
  Container,
  Grid,
  GridColumn,
  Text,
  theme,
} from '@qolab/uikit';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Welcome = () => {
  return (
    <main data-cy="welcome-page">
      <Container>
        <header>
          <AppTitle variant="h4">qolab</AppTitle>
        </header>
        <Grid>
          <SectionGridColumn md={6}>
            <HeroTextContainer>
              <Moto variant="h1" as="h1" data-cy="welcome-moto">
                Donnez vie à vos inspirations digitales
              </Moto>
              <Text>
                <Text as="span" variant="h4">
                  qolab{' '}
                </Text>
                est une plateforme de mise en relation entre porteurs de{' '}
                <Text weight="bold" as="span">
                  projets digitaux à but solidaire, social ou écologique
                </Text>{' '}
                et les personnes voulant s&apos;investir dans ce type de projet,
                quelques soient leurs compétences.
              </Text>
              <div>
                <Link href={Routes.HOME} passHref>
                  <Button data-cy="welcome-lets_go_button">
                    C&apos;est parti !
                  </Button>
                </Link>
              </div>
            </HeroTextContainer>
          </SectionGridColumn>
          <GridColumn md={6}>
            <Image
              src="/illustrations/people_collaborating.png"
              alt=""
              height={1200}
              width={1600}
            />
          </GridColumn>
        </Grid>
      </Container>
      <SelectionSection data-cy="welcome-need_section">
        <Container>
          <SectionTitle as="h2" variant="h2">
            Quel est votre besoin ?
          </SectionTitle>
          <Grid>
            <GridColumn xs={6}>
              <RoleCard>
                <BulbIcon size="large" color={theme.colors.primary500} />
                <Text variant="h5">
                  J&apos;ai une idée de projet à développer
                </Text>
                <a href="#business" />
              </RoleCard>
            </GridColumn>
            <GridColumn xs={6}>
              <RoleCard>
                <CodeIcon size="large" color={theme.colors.secondary500} />
                <Text variant="h5">Je cherche un projet à développer</Text>
                <a href="#developer" />
              </RoleCard>
            </GridColumn>
          </Grid>
        </Container>
      </SelectionSection>
      <Section data-cy="welcome-about_section">
        <Container>
          <Text variant="h2">
            C&apos;est quoi en fait{' '}
            <Text as="span" variant="h2" status="primary">
              qolab
            </Text>{' '}
            ?
          </Text>
          <AboutTextContainer>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in dolor urna. Duis condimentum ut turpis vel vulputate. Quisque
              justo mi, varius non posuere eu, luctus at dolor. Duis vitae metus
              placerat, finibus eros ac, interdum ipsum. Fusce vel mollis nunc.
              Sed posuere sagittis semper. In tempus arcu et ullamcorper
              efficitur. In hac habitasse platea dictumst. Cras semper, augue
              sed aliquet malesuada, dolor nibh malesuada sem, non dignissim
              orci sem ac lorem.
            </Text>
            <Text>
              Ut convallis at nibh a semper. Donec blandit, diam et condimentum
              convallis, mi ipsum vulputate nisi, et blandit felis quam et
              justo. Etiam consequat sit amet nunc quis blandit. Duis hendrerit
              pharetra gravida. Suspendisse potenti. Nam elit ante, ornare sed
              elementum et, gravida et tortor. Maecenas varius tempor malesuada.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras
              euismod, justo a viverra porttitor, risus nibh laoreet arcu, et
              imperdiet est turpis vitae ipsum. Etiam id imperdiet nunc, non
              commodo purus. Sed lacinia aliquam purus at eleifend. Quisque ut
              lacus magna. Duis in malesuada lectus. Vivamus velit risus,
              malesuada eu malesuada id, gravida ac nulla.
            </Text>
          </AboutTextContainer>
        </Container>
      </Section>
      <Section withGrayBackground data-cy="welcome-qualities_section">
        <QualitiesContainer>
          <Grid>
            <GridColumn md={4}>
              <Card>
                <Text align="center" variant="h4">
                  Bienveillance
                </Text>
              </Card>
            </GridColumn>
            <GridColumn md={4}>
              <Card>
                <Text align="center" variant="h4">
                  Entraide
                </Text>
              </Card>
            </GridColumn>
            <GridColumn md={4}>
              <Card>
                <Text align="center" variant="h4">
                  Expertise
                </Text>
              </Card>
            </GridColumn>
          </Grid>
        </QualitiesContainer>
      </Section>
      <Section id="business" data-cy="welcome-business_section">
        <Container>
          <Grid>
            <SectionGridColumn md={6}>
              <Text variant="h3" as="h3">
                J&apos;ai une idée de projet à développer
              </Text>
              <Text>
                Ut convallis at nibh a semper. Donec blandit, diam et
                condimentum convallis, mi ipsum vulputate nisi, et blandit felis
                quam et justo. Etiam consequat sit amet nunc quis blandit. Duis
                hendrerit pharetra gravida. Suspendisse potenti. Nam elit ante,
                ornare sed elementum et, gravida et tortor. Maecenas varius
                tempor malesuada. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Cras euismod, justo a viverra porttitor,
                risus nibh laoreet arcu, et imperdiet est turpis vitae ipsum.
                Etiam id imperdiet nunc, non commodo purus. Sed lacinia aliquam
                purus at eleifend. Quisque ut lacus magna. Duis in malesuada
                lectus. Vivamus velit risus, malesuada eu malesuada id, gravida
                ac nulla.
              </Text>
            </SectionGridColumn>
            <GridColumn md={6}>
              <Image
                src="/illustrations/startup_idea.png"
                alt=""
                width={1600}
                height={1200}
              />
            </GridColumn>
          </Grid>
        </Container>
      </Section>
      <Section
        id="developer"
        withGrayBackground
        data-cy="welcome-developer_section"
      >
        <Container>
          <Grid>
            <GridColumn md={6}>
              <Image
                src="/illustrations/app_developer.png"
                alt=""
                width={1600}
                height={1200}
              />
            </GridColumn>
            <SectionGridColumn md={6}>
              <Text variant="h3" as="h3">
                J&apos;ai des compétences pour participer à des projets
              </Text>
              <Text>
                Ut convallis at nibh a semper. Donec blandit, diam et
                condimentum convallis, mi ipsum vulputate nisi, et blandit felis
                quam et justo. Etiam consequat sit amet nunc quis blandit. Duis
                hendrerit pharetra gravida. Suspendisse potenti. Nam elit ante,
                ornare sed elementum et, gravida et tortor. Maecenas varius
                tempor malesuada. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Cras euismod, justo a viverra porttitor,
                risus nibh laoreet arcu, et imperdiet est turpis vitae ipsum.
                Etiam id imperdiet nunc, non commodo purus. Sed lacinia aliquam
                purus at eleifend. Quisque ut lacus magna. Duis in malesuada
                lectus. Vivamus velit risus, malesuada eu malesuada id, gravida
                ac nulla.
              </Text>
            </SectionGridColumn>
          </Grid>
        </Container>
      </Section>
      <Footer>
        <Container>
          <Text variant="h3" status="accent">
            qolab
          </Text>
          <Text status="accent" weight="light">
            Votre plateforme de création de projets
          </Text>
        </Container>
      </Footer>
    </main>
  );
};

export default Welcome;

const AppTitle = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const QualitiesContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Moto = styled(Text)`
  background: ${({ theme }) =>
    `linear-gradient(112deg, ${theme.colors.primary500}, ${theme.colors.secondary500})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  line-height: ${({ theme }) => theme.lineHeights.sm};
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: ${({ theme }) => theme.spacing[10]};
`;

const SelectionSection = styled.section`
  padding: ${({ theme }) => theme.spacing.md} 0
    ${({ theme }) => theme.spacing[18]} 0;
  background: #8e2de2;
  background: -webkit-linear-gradient(120deg, #4a00e0, #8e2de2);
  background: linear-gradient(120deg, #4a00e0, #8e2de2);
`;

const SectionTitle = styled(Text)`
  margin: ${({ theme }) => theme.spacing[10]} auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const SectionGridColumn = styled(GridColumn)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const RoleCard = styled(Card)`
  position: relative;
  max-width: 300px;
  height: 150px;
  margin: ${({ theme }) => theme.spacing[10]} auto auto auto;
  text-align: center;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  .card-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
  }

  ${Text} {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }

  a {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

const Section = styled.section<{ withGrayBackground?: boolean }>`
  padding-top: ${({ theme }) => theme.spacing[14]};
  padding-bottom: ${({ theme }) => theme.spacing[14]};
  background-color: ${({ theme, withGrayBackground }) =>
    theme.colors[withGrayBackground ? 'background100' : 'background']};
`;

const AboutTextContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing[14]};

  ${Text} + ${Text} {
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray900};
  min-height: 160px;
`;
