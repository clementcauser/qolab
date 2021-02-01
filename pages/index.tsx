import { Card, Container, Grid, Typography } from "@material-ui/core"
import { GetServerSideProps } from "next"
import Header from "../components/Header"
import { IIdea } from "../interfaces/ideas/idea"
import prisma from "../lib/prisma"

type Props = {
    ideas: IIdea[]
}

const Home = ({ ideas }: Props) => {
    return (
        <>
            <Header title="Accueil" />
            <Container>
                <Grid container>
                    {ideas.map((idea) => (
                        <Grid item key={idea.id} sm={4}>
                            <Card>
                                <Typography variant="h4">{idea.title}</Typography>
                                <Typography>{idea.description}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const ideas = await prisma.idea.findMany()

    return { props: { ideas } }
}

export default Home
