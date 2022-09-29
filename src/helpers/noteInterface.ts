export const category = ['Task', 'Random Thought', 'Idea'];
export type Category = (typeof category)[number];

export interface Note {
  id: number;
  title: string;
  createdAt: string;
  category: Category;
  description: string;
  active: boolean;
}

interface Stat {
  active: number;
  archived: number;
}

export type Stats = {
  [index in Category]: Stat
};
