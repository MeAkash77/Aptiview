import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Example user (adjust fields to match your schema)
  await prisma.user.upsert({
    where: { email: "admin@aptiview.com" },
    update: {},
    create: {
      email: "admin@aptiview.com",
      // only include fields that exist in your model
    },
  });

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
