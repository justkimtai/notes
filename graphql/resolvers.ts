import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    notes: () => {
      return prisma.note.findMany();
    },
  },
};
