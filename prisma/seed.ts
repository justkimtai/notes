import { PrismaClient } from "@prisma/client";
import { getSeedData } from "../app/lib/data";

const prisma = new PrismaClient();

async function main() {
    const { users, categories, notes } = await getSeedData();

  // Seed Users
    await prisma.user.createMany({
        data: users,
        skipDuplicates: true, // Avoid duplicate errors if rerunning the script
    });

  // Seed Categories
    await prisma.category.createMany({
        data: categories,
        skipDuplicates: true,
    });

  // Seed Notes
    await prisma.note.createMany({
        data: notes,
        skipDuplicates: true,
    });

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
    await prisma.$disconnect();
});
