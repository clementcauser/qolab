const faker = require("faker")

const generateTags = (count) => {
    const tags = []

    for (let index = 0; index < count; index++) {
        const tag = {
            publicId: faker.random.uuid(),
            name: faker.name.jobTitle(),
            createdAt: faker.date.recent(),
            updatedAt: new Date(),
        }

        tags.push(tag)
    }

    return tags
}

module.exports = { generateTags }
