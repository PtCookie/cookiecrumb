import { objectType } from 'nexus';

import type { Context } from '../../context';

const Issue = objectType({
  name: 'Issue',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.nonNull.field('updatedAt', { type: 'DateTime' });
    t.nonNull.string('title');
    t.string('content');
    t.field('step', {
      type: 'Step',
      resolve: (parent, _, context: Context) => {
        return context.prisma.issue
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .step();
      },
    });
  },
});

export { Issue };
