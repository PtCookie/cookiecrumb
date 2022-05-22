import { arg, nonNull, objectType, stringArg } from 'nexus';

import type { Context } from '../context';

const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('allBoards', {
      type: 'Board',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.board.findMany({
          include: {
            steps: {
              include: {
                issues: true,
              },
            },
          },
        });
      },
    });

    t.nonNull.list.nonNull.field('stepsByBoardName', {
      type: 'Step',
      args: {
        name: stringArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.step.findMany({
          where: {
            board: {
              is: {
                name: args.name || undefined,
              },
            },
          },
        });
      },
    });

    t.nonNull.list.nonNull.field('stepsByName', {
      type: 'Step',
      args: {
        name: nonNull(stringArg()),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.step.findMany({
          where: { name: { contains: args.name } },
        });
      },
    });

    t.nonNull.list.nonNull.field('issuesByStepName', {
      type: 'Issue',
      args: {
        name: stringArg(),
        order: arg({
          type: 'IssueOrderByUpdatedAtInput',
        }),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.issue.findMany({
          where: {
            step: {
              is: {
                name: args.name || undefined,
              },
            },
          },
          orderBy: args.order || undefined,
        });
      },
    });

    t.nonNull.list.nonNull.field('issuesByTitle', {
      type: 'Issue',
      args: {
        title: nonNull(stringArg()),
        order: arg({
          type: 'IssueOrderByUpdatedAtInput',
        }),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.issue.findMany({
          where: { title: { contains: args.title } },
          orderBy: args.order || undefined,
        });
      },
    });

    t.nonNull.list.nonNull.field('issuesByContent', {
      type: 'Issue',
      args: {
        content: nonNull(stringArg()),
        order: arg({
          type: 'IssueOrderByUpdatedAtInput',
        }),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.issue.findMany({
          where: { content: { contains: args.content } },
          orderBy: args.order || undefined,
        });
      },
    });
  },
});

export { Query };
