export interface Block {
  id: string;
  type: string;
}

export interface TextB extends Block {
  text: string;
  color: string;
  align: string;
}

export interface ImageB extends Block {
  src: string;
  alt?: string;
}

export interface ButtonB extends Block {
  text: string;
  color?: string;
  bgColor?: string;
}

type ListItem = {
  id: string;
  title: string;
  description: string;
  src: string;
};

export interface ListB extends Block {
  items: ListItem[];
}

export interface Page {
  id: string;
  blocks: Block[];
}
export interface Funnel {
  id: string;
  name: string;
  bgColor: string;
  pages: Page[];
}
