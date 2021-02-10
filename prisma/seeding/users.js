const faker = require("faker")

const generateUser = (count) => {
    const users = []

    for (let index = 0; index < count; index++) {
        const user = {
            publicId: faker.random.uuid(),
            name: faker.name.findName(),
            email: faker.internet.email(),
            emailVerified: null,
            image: faker.image.avatar(),
            createdAt: faker.date.recent(),
            updatedAt: new Date(),
        }

        users.push(user)
    }

    return users
}

module.exports = { generateUser }
