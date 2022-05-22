import { objectType } from 'nexus';

import type { Context } from '../../context';

const Board = objectType({
  name: 'Board',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.nonNull.field('updatedAt', { type: 'DateTime' });
    t.nonNull.string('name');
    t.nonNull.list.nonNull.field('steps', {
      type: 'Step',
      resolve: (parent, _, context: Context) => {
        return context.prisma.board
          .findUnique({
            where: { id: parent.id || undefined },
          })
          .steps();
      },
    });
  },
});

export { Board };
