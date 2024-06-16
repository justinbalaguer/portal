"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (input.length > 0) {
        window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
      }
    }
  }
  
  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  return (
    <main>
      <input className="border border-[#4d4d80] placeholder:text-[#4d4d80] bg-transparent rounded-[10px] px-2 focus:border-[#e6a1cf] focus:outline-none" ref={inputRef} type="text" placeholder="Search" onChange={handleInput} onKeyUp={handleKeyPress} />
    </main>
  );
}
