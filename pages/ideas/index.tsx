import { GetServerSideProps } from "next"
import IdeasList from "../../components/ideas/IdeasList"
import Layout from "../../components/layout"
import { Idea } from "../../interfaces/ideas/idea"
import prisma from "../../lib/prisma"

type Props = {
    ideas: Idea[]
}

const IdeasListView = ({ ideas }: Props) => {
    return (
        <Layout noBackground>
            <IdeasList ideas={ideas} />
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const ideas = await prisma.idea.findMany({ take: 9 })

    const serializedIdeas = ideas.map((idea) => ({
        ...idea,
        createdAt: idea.createdAt.getTime(),
        updatedAt: idea.updatedAt.getTime(),
    }))

    return { props: { ideas: serializedIdeas } }
}

export default IdeasListView
