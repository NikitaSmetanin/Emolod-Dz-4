type Massage = {
  id: number;
  time: Date;
  author: string;
  text: string;
  isOwner: boolean;
};

type MassageListProps = {
  massages: Massage[];
};

type BlogContainerType = {
  title: string;
  publicationDate: Date;
  description: string;
  fullArticleLink: string;
};

export type { Massage, MassageListProps, BlogContainerType };
