import { builder } from "../builder";
import prisma from "@/lib/prisma";

builder.prismaObject('Note', {
  fields: (t) => ({
    id: t.exposeID('id'),
    title: t.exposeString('title'),
    content: t.exposeString('content'),
    isArchived: t.exposeBoolean('isArchived'),// Expose DateTime field
    user: t.relation('user'), // Relation to User
    category: t.relation('category', { nullable: true }), // Nullable relation to Category
  }),
});

builder.queryField("notes", (t) =>
  // 2.
    t.prismaField({
      // 3.
      type: ['Note'],
      // 4.
      resolve: (query) =>
        prisma.note.findMany({ ...query })
    })
  )