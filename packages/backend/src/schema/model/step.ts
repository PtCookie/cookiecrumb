import { objectType } from 'nexus';

import type { Context } from '../../context';

const Step = objectType({
  name: 'Step',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.nonNull.field('updatedAt', { type: 'DateTime' });
    t.nonNull.string('name');
    t.field('board', {
      type: 'Board',
      resolve: (parent, _, context: Context) => {
        return context.prisma.step
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .board();
      },
    });
    t.nonNull.list.nonNull.field('issues', {
      type: 'Issue',
      resolve: (parent, _, context: Context) => {
        return context.prisma.step
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .issues();
      },
    });
  },
});

export { Step };
