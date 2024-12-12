import { builder } from "../builder";
import prisma from "@/lib/prisma";

builder.prismaObject('Category', {
    fields: (t) => ({
      id: t.exposeID('id'),
      name: t.exposeString('name'),
      notes: t.relation('notes'),// Expose DateTime field
    }),
  });

  builder.queryField("categories", (t) =>
    // 2.
      t.prismaConnection({
        // 3.
        type: 'Category',
        cursor: 'id',
        // 4.
        resolve: (query) =>
          prisma.category.findMany({ ...query })
      })
    )