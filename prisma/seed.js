const { PrismaClient, user } = require("@prisma/client");
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

async function main() {
  //deleting all the users
  const all_users = await prisma.user.findMany({
    select: {
      id: true,
    },
  });
  // console.log(all_users[Math.floor(Math.random() * all_users.length)].id);
  // console.log(all_users);
  await prisma.projects.deleteMany({});
  // await prisma.user.deleteMany({});
  //creating new users
  //   const users = [];
  // for (let i = 0; i < 1000; i++) {
  //   await prisma.user.create({
  //     data: {
  //       first_name: faker.name.firstName(),
  //       last_name: faker.name.lastName(),
  //       username: faker.internet.userName(),
  //       email: faker.internet.email(),
  //       account_type: "worker",
  //       country: faker.address.country(),
  //       password: faker.internet.password(),
  //       createdAt: new Date(),
  //       updatedAt: new Date(),
  //     },
  //   });
  // }
  for (let i = 0; i < 1000; i++) {
    await prisma.projects.create({
      data: {
        title: faker.lorem.word(10),
        description: faker.lorem.paragraphs(5),
        budget_min: faker.mersenne.rand(10000, 500),
        budget_max: faker.mersenne.rand(10000, 500),
        rating: faker.mersenne.rand(5, 0),
        userId: all_users[Math.floor(Math.random() * all_users.length)].id,
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
