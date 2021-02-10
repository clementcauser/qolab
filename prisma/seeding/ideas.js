const faker = require("faker")

const generateIdeas = (count) => {
    const ideas = []

    for (let index = 0; index < count; index++) {
        const idea = {
            publicId: faker.random.uuid(),
            title: faker.company.catchPhrase(),
            description: faker.lorem.paragraph(),
            published: faker.random.boolean(),
            authorId: faker.random.number(20),
            createdAt: faker.date.recent(),
            updatedAt: new Date(),
        }

        ideas.push(idea)
    }

    return ideas
}

module.exports = { generateIdeas }
