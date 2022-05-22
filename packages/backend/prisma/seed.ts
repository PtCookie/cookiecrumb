import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const boardData: Prisma.BoardCreateInput[] = [
  {
    name: 'Default Board',
    steps: {
      create: [
        {
          name: 'TODO',
          issues: {
            create: [{ title: 'What should I do?' }, { title: 'ASAP', content: 'Should do this!' }],
          },
        },
        {
          name: 'Doing',
          issues: {
            create: [
              { title: 'Some work', content: "It's so hard" },
              { title: 'Eat donuts' },
              { title: 'Searching for answer' },
            ],
          },
        },
        {
          name: 'Done',
          issues: {
            create: [{ title: 'DB migration', content: "It's already done!" }],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding...`);

  // Seed data
  for (const b of boardData) {
    const board = await prisma.board.create({
      data: b,
    });
    console.log(`Created board "${board.name}".`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
