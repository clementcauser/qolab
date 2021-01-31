import { Card, Container, Typography } from "@material-ui/core";
import { GetServerSideProps } from "next";
import prisma from "../lib/prisma";

type Props = {
  ideas: any[];
};

const Home = ({ ideas }: Props) => {
  return (
    <Container>
      {ideas.map((idea) => (
        <Card key={idea.id}>
          <Typography variant="h4">{idea.title}</Typography>
          <Typography>{idea.description}</Typography>
        </Card>
      ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const ideas = await prisma.idea.findMany();

  return { props: { ideas } };
};

export default Home;
