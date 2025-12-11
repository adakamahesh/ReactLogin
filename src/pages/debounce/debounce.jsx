import React, { useState, useEffect } from "react";

function DebounceExample() {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />

      <h3>Normal: {text}</h3>
      <h3>Debounced: {debouncedText}</h3>
    </div>
  );
}

export default DebounceExample;
