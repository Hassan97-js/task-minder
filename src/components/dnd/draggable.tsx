"use client";

import { type ReactNode, type CSSProperties } from "react";

import { type UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type TProps = {
  id: UniqueIdentifier;
  children: ReactNode;
};

function Draggable({ id, children }: TProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id
  });

  const style = {
    transform: CSS.Translate.toString(transform)
  } satisfies CSSProperties;

  return (
    <button ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </button>
  );
}

export default Draggable;
