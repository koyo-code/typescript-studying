import "./style.css";

interface book {
  title: string;
  published: number;
  author: string;
}

const bookInfo: Partial<book> = {};

bookInfo.author;
bookInfo.published = 1221;
bookInfo.author = "夏目漱石";
