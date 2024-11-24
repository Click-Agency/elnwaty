type SystemArr = {
  title: string;
  img: string;
  steps: {
    title: string;
    description: string;
  }[];
}[];

type AchievementsArr = {
  title: string;
  number: number;
}[];

export type { SystemArr, AchievementsArr };
