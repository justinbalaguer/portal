"use client";

import { useState, useRef, useEffect } from "react";
import { Logo, Date, Time } from "./components";
import Link from "next/link";

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
    <main className="w-full flex flex-col justify-center items-center">
      <div className="w-[300px] h-[300px] mt-[4em]">
        <Logo />
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <Date />
        <Time />
      </div>
      <div className="my-[2em]">
        <input className="h-auto w-[1000px] text-[32px] border border-[#6272A4] placeholder:text-[#6272A4] text-[#6272A4] bg-transparent rounded-[10px] px-5 py-3 focus:border-[#8BE9FD] focus:outline-none" ref={inputRef} type="text" placeholder="Search" onChange={handleInput} onKeyUp={handleKeyPress} />
      </div>
      <div className="text-[24px] w-full flex flex-wrap justify-center items-start gap-[3em]">
        <div>
          <p className="text-[#BD93F9]">/dev</p>
          <ul className="text-[#F8F8F2]">
            <li>
              <Link href="https://github.com/" className="hover:text-[#F1FA8C] cursor-pointer">.github</Link>
            </li>
            <li>
              <Link href="https://gist.github.com/" className="hover:text-[#F1FA8C] cursor-pointer">.gist</Link>
            </li>
            <li>
              <Link href="https://chat.openai.com/" className="hover:text-[#F1FA8C] cursor-pointer">.chatgpt</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#BD93F9]">/soc</p>
          <ul className="text-[#F8F8F2]">
            <li>
              <Link href="https://x.com/" className="hover:text-[#F1FA8C] cursor-pointer">.x</Link>
            </li>
            <li>
              <Link href="https://reddit.com/" className="hover:text-[#F1FA8C] cursor-pointer">.reddit</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#BD93F9]">/ent</p>
          <ul className="text-[#F8F8F2]">
            <li>
              <Link href="https://youtube.com/" className="hover:text-[#F1FA8C] cursor-pointer">.youtube</Link>
            </li>
            <li>
              <Link href="https://twitch.tv/" className="hover:text-[#F1FA8C] cursor-pointer">.twitch</Link>
            </li>
            <li>
              <Link href="https://netflix.com/" className="hover:text-[#F1FA8C] cursor-pointer">.netflix</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[#BD93F9]">/oth</p>
          <ul className="text-[#F8F8F2]">
            <li>
              <Link href="https://drive.google.com/" className="hover:text-[#F1FA8C] cursor-pointer">.drive</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[3em]">
        <p className="text-[#6272A4]">made with ❤️ by <span className="hover:text-[#F1FA8C] cursor-pointer underline">justin</span></p>
      </div>
    </main>
  );
}
