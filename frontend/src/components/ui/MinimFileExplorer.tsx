"use client";

import { FC } from "react";
import { Tree, NodeRendererProps } from "react-arborist";
import { FcFolder, FcOpenedFolder, FcFile } from "react-icons/fc";
import { Button, ButtonGroup } from "@nextui-org/button";
import { GoChevronDown } from "react-icons/go";

const data = [
  { id: "1", name: "Unread" },
  { id: "2", name: "Threads" },
  {
    id: "3",
    name: "Chat Rooms",
    children: [
      {
        id: "c1",
        name: "General",
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

const Node: FC<NodeRendererProps<{ id: string; name: string }>> = ({
  node,
  style,
}) => {
  return (
    <Button
      startContent={
        node.isLeaf ? (
          <FcFile />
        ) : node.isOpen ? (
          <FcOpenedFolder />
        ) : (
          <FcFolder />
        )
      }
      endContent={
        node.isLeaf ? null : (
          <GoChevronDown
            className={`transition-transform duration-100 ${node.isOpen ? "" : "rotate-90"}`}
          />
        )
      }
      variant="light"
      disableRipple
      fullWidth
      style={{ marginLeft: style.paddingLeft }}
      className="justify-start h-8"
      radius={"sm"}
      onClick={() => node.toggle && node.toggle()}
    >
      {node.data.name}
    </Button>
  );
};

export const MinimFileExplorer: FC<{ width: number }> = ({ width }) => {
  return (
    <Tree
      initialData={data}
      rowHeight={32}
      className="w-full"
      padding={2}
      width={width}
      disableDrag
    >
      {Node}
    </Tree>
  );
};
