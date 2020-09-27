import { useState } from "react";

const useDragHandler = (instance) => {
  const [dragging, isDragging] = useState(false);
  const [direction, setDirection] = useState("");
  const [prevX, setPrevX] = useState(-1);

  const onDragStart = () => {
    isDragging(true);
  };

  const onDrag = (e) => {
    if (!dragging) return;

    if (prevX === -1) {
      setPrevX(e.pageX);
      return false;
    }
    if (prevX > e.pageX) {
      if (e.pageX === 0) return;
      setDirection("left");
    } else if (prevX < e.pageX) {
      setDirection("right");
    }
    setPrevX(e.pageX);
  };

  const onDragEnd = () => {
    isDragging(false);
    if (direction === "left") instance.next();
    if (direction === "right") instance.prev();
    setDirection("");
  };

  return { onDrag, onDragEnd, onDragStart };
};

export default useDragHandler;
