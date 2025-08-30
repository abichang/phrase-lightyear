export interface Book {
  id: number;
  title: string;
  author: string;
  poeticExcerpt: string;
  summary: string;
  insights: { id: number; author: string; text: string }[];
  suggestions: { id: number; author: string; text: string }[];
  theme: string;
}

export const books: Book[] = [
  {
    id: 1,
    title: "圍城",
    author: "錢鍾書",
    poeticExcerpt: "城外的人想衝進去，城裡的人想逃出來。",
    summary: "小說深刻描繪了抗戰時期知識分子的群像，透過主角方鴻漸的經歷，揭示了人性的虛偽、矛盾與無奈。",
    insights: [
      { id: 1, author: "讀者甲", text: "這本書對婚姻和生活的諷刺描寫得太真實了，不愧是經典。" },
      { id: 2, author: "讀者乙", text: "方鴻漸這個角色讓人又愛又恨，他的經歷引人深思。" },
    ],
    suggestions: [
      { id: 1, author: "讀者丙", text: "喜歡這種諷刺現實風格的話，可以讀讀魯迅的《吶喊》。" },
    ],
    theme: "諷刺",
  },
  {
    id: 2,
    title: "活著",
    author: "余華",
    poeticExcerpt: "人是為了活著本身而活著的，而不是為了活著之外的任何事物所活著的。",
    summary: "講述了主角福貴一生坎坷的命運，經歷了內戰、大躍進、文革等時期，親人相繼離世，但他依然堅韌地活著。",
    insights: [
      { id: 1, author: "讀者丁", text: "讀完心裡很沉重，但又對生命本身充滿了敬畏。" },
    ],
    suggestions: [],
    theme: "堅韌",
  },
  {
    id: 3,
    title: "三體",
    author: "劉慈欣",
    poeticExcerpt: "給歲月以文明，而不是給文明以歲月。",
    summary: "一部宏大的科幻史詩，從文革時期的一個秘密軍事計畫開始，引出了地球文明與三體文明的生死較量。",
    insights: [
      { id: 1, author: "讀者戊", text: "想像力太驚人了，完全打開了我的科幻世界觀。" },
    ],
    suggestions: [
      { id: 1, author: "讀者己", text: "這是必讀的科幻經典！" },
    ],
    theme: "科幻",
  },
    {
    id: 4,
    title: "撒哈拉的故事",
    author: "三毛",
    poeticExcerpt: "每想你一次，天上飄落一粒沙，從此形成了撒哈拉。",
    summary: "記錄了作者三毛與丈夫荷西在撒哈拉沙漠生活的點點滴滴，充滿了異域風情、浪漫與生活的智慧。",
    insights: [
      { id: 1, author: "讀者庚", text: "三毛的文字充滿了自由和對生命的熱愛，讓人嚮往。" },
    ],
    suggestions: [],
    theme: "流浪",
  },
];
