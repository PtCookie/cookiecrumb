import { inputObjectType } from 'nexus';

export const IssueOrderByUpdatedAtInput = inputObjectType({
  name: 'IssueOrderByUpdatedAtInput',
  definition(t) {
    t.nonNull.field('updatedAt', { type: 'SortOrder' });
  },
});

export const BoardCreateInput = inputObjectType({
  name: 'BoardCreateInput',
  definition(t) {
    t.nonNull.string('name');
  },
});

export const StepCreateInput = inputObjectType({
  name: 'StepCreateInput',
  definition(t) {
    t.nonNull.string('name');
    t.nonNull.int('boardId');
  },
});

export const IssueCreateInput = inputObjectType({
  name: 'IssueCreateInput',
  definition(t) {
    t.nonNull.string('title');
    t.string('content');
    t.nonNull.int('stepId');
  },
});
