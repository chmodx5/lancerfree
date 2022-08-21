const { PrismaClient, user } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  //deleting all the users
  await prisma.user.deleteMany({});
  //creating new users
  //   const users = [];
  for (let i = 0; i < 1000; i++) {
    await prisma.user.create({
      data: {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        account_type: "worker",
        country: faker.address.country(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
