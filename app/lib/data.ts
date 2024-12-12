import { hashPassword } from './utils';

// Utility function to hash passwords
async function hashedPasswords() {
  return {
    alicePassword: await hashPassword('alicePassword123'),
    bobPassword: await hashPassword('bobPassword123'),
  };
}

export async function getSeedData() {
  const { alicePassword, bobPassword } = await hashedPasswords();

  // Users
  const users = [
    {
      id: 1,
      email: 'alice@example.com',
      password: alicePassword,
      name: 'Alice',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      email: 'bob@example.com',
      password: bobPassword,
      name: 'Bob',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  // Categories
  const categories = [
    {
      id: 1,
      name: 'Work',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Personal',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  // Notes
  const notes = [
    {
      id: 1,
      title: 'Project Meeting Notes',
      content: 'Discuss timelines and deliverables.',
      isArchived: false,
      userId: 1, // Alice's ID
      categoryId: 1, // Work category
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Grocery List',
      content: 'Milk, Eggs, Bread, Coffee.',
      isArchived: false,
      userId: 2, // Bob's ID
      categoryId: 2, // Personal category
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'Weekly Goals',
      content: 'Finish report, start new project.',
      isArchived: true,
      userId: 1, // Alice's ID
      categoryId: 1, // Work category
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  return { users, categories, notes };
}
