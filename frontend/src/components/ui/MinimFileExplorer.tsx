"use client";

import { Tree } from 'react-arborist';

const data = [
  { id: "1", name: "Unread" },
  { id: "2", name: "Threads" },
  {
    id: "3",
    name: "Chat Rooms",
    children: [
      {
        id: "c1",
        name: "General sex",
        children: [
          { id: "d5", name: "Alice2" },
          { id: "d6", name: "Bob2" },
          { id: "d7", name: "Charlie2" },
        ],
      },
      { id: "c2", name: "Random" },
      { id: "c3", name: "Open Source Projects" },
    ],
  },
  {
    id: "4",
    name: "Direct Messages",
    children: [
      { id: "d1", name: "Alice" },
      { id: "d2", name: "Bob" },
      { id: "d3", name: "Charlie" },
    ],
  },
];

export const MinimFileExplorer = () => {
  return <Tree initialData={data} />;
};