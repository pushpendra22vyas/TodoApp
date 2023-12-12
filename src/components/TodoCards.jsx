import React, { useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";


function TodoCards({ id, text, index, onReorder }) {
    const ItemTypes = {
      CARD: "card",
    };
    const itemIndex = useRef(index);
  
    useEffect(() => {
      itemIndex.current = index;
    }, [index]);
  
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD,
      item: { id, index },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    });
  
    const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      hover: (item) => {
        if (!item) {
          return;
        }
  
        const draggedIndex = item.index;
        const targetIndex = itemIndex.current;
  
        if (draggedIndex === targetIndex) {
          return;
        }
  
        onReorder(draggedIndex, targetIndex);
        item.index = targetIndex;
      }
    });

    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const currentTime = `${hours}:${minutes} ${ampm}`;
      
        return currentTime;
      }
  
    return (
      <div
        ref={(node) => {
          drag(node);
          drop(node);
        }}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: "move",
        }}
        className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300"
      >
        <p className="p-4 font-serif">{text}</p>
        <p className="border-t-2 text-right pr-3 pt-2">
          <i>Created at {getCurrentTime()}</i>
        </p>
      </div>
    );
  }

export default TodoCards;
