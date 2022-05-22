import { arg, intArg, nonNull, objectType, stringArg } from 'nexus';

import type { Context } from '../context';

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.nonNull.field('createBoard', {
      type: 'Board',
      args: {
        data: nonNull(
          arg({
            type: 'BoardCreateInput',
          }),
        ),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.board.create({
          data: args.data,
        });
      },
    });

    t.field('renameBoard', {
      type: 'Board',
      args: {
        id: nonNull(intArg()),
        newName: nonNull(stringArg()),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.board.update({
          where: {
            id: args.id,
          },
          data: {
            name: args.newName,
          },
        });
      },
    });

    t.field('deleteBoard', {
      type: 'Board',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.board.delete({
          where: {
            id: args.id,
          },
        });
      },
    });

    t.nonNull.field('createStep', {
      type: 'Step',
      args: {
        data: nonNull(
          arg({
            type: 'StepCreateInput',
          }),
        ),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.step.create({
          data: args.data,
        });
      },
    });

    t.field('renameStep', {
      type: 'Step',
      args: {
        id: nonNull(intArg()),
        newName: nonNull(stringArg()),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.step.update({
          where: {
            id: args.id,
          },
          data: {
            name: args.newName,
          },
        });
      },
    });

    t.field('deleteStep', {
      type: 'Step',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.step.delete({
          where: {
            id: args.id,
          },
        });
      },
    });

    t.nonNull.field('createIssue', {
      type: 'Issue',
      args: {
        data: nonNull(
          arg({
            type: 'IssueCreateInput',
          }),
        ),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.issue.create({
          data: args.data,
        });
      },
    });

    t.field('updateIssue', {
      type: 'Issue',
      args: {
        id: nonNull(intArg()),
        title: stringArg(),
        content: stringArg(),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.issue.update({
          where: {
            id: args.id,
          },
          data: {
            title: args.title != null ? args.title : undefined,
            content: args.content != null ? args.content : undefined,
          },
        });
      },
    });

    t.field('moveIssue', {
      type: 'Issue',
      args: {
        issueId: nonNull(intArg()),
        stepId: nonNull(intArg()),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.issue.update({
          where: {
            id: args.issueId,
          },
          data: {
            stepId: args.stepId,
          },
        });
      },
    });

    t.field('deleteIssue', {
      type: 'Issue',
      args: {
        id: nonNull(intArg()),
      },
      resolve: (_parent, args, context: Context) => {
        return context.prisma.issue.delete({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});

export { Mutation };
