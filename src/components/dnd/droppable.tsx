"use client";

import { type ReactNode, type CSSProperties } from "react";
import { type UniqueIdentifier, useDroppable } from "@dnd-kit/core";

type TProps = {
  id: UniqueIdentifier;
  children: ReactNode;
};

function Droppable({ id, children }: TProps) {
  const { isOver, setNodeRef } = useDroppable({
    id
  });

  const style = {
    opacity: isOver ? 1 : 0.5
  } satisfies CSSProperties;

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}

export default Droppable;
