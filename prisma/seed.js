const { PrismaClient } = require("@prisma/client")
const { generateUser } = require("./seeding/users")
const { generateTags } = require("./seeding/tags")
const { generateIdeas } = require("./seeding/ideas")

const prisma = new PrismaClient()

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const USERS_COUNT = 20
const TAGS_COUNT = 10
const IDEAS_COUNT = 15

async function main() {
    const users = generateUser(USERS_COUNT)
    const tags = generateTags(TAGS_COUNT)

    for (const idea of generateIdeas(IDEAS_COUNT)) {
        const { createdAt, description, publicId, published, title, updatedAt } = idea
        await prisma.idea.create({
            data: {
                authorId: getRandomInt(USERS_COUNT),
                createdAt,
                description,
                publicId,
                published,
                title,
                updatedAt,
                author: { create: users[getRandomInt(USERS_COUNT)] },
                tags: { create: tags[getRandomInt(TAGS_COUNT)] },
            },
        })
    }
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
