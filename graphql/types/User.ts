import { builder } from "@/graphql/builder";
import prisma from "@/lib/prisma";

builder.prismaObject('User', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name'),
      email: t.exposeString('email'),
      notes: t.relation('notes'),
    }),
  });

  builder.queryField("users", (t) =>
    // 2.
      t.prismaConnection({
        // 3.
        type: 'User',
        cursor: 'id',
        // 4.
        resolve: (query) =>
          prisma.user.findMany({ ...query })
      })
    )