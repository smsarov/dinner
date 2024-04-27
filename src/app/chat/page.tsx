"use client";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { redirect } from "next/navigation";
import { CgArrowUp } from "react-icons/cg";
import {motion} from 'framer-motion'

import type { MessageProps } from "./Message";
import { Message } from "./Message";
import script from "@/utils/scripts/hello";

function Chat() {
  const [, startTransition] = useTransition();

  const inputRef = useRef<HTMLSpanElement>(null);

  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [scriptIndex, setScriptIndex] = useState(0);

  const isScriptFinished = scriptIndex >= script.length;
  const isWaitingForInput = script[scriptIndex].type === 'input';

  useEffect(() => {
    if (isScriptFinished) return;

    const scriptItem = script[scriptIndex];

    if (scriptItem.type === "end") {
      setTimeout(() => {
        startTransition(() => redirect("/"));
      }, scriptItem.delay);
      return;
    }

    if (scriptItem.type !== "input") {
      setTimeout(() => {
        setMessages([...messages, { message: scriptItem.message }]);
        setScriptIndex(scriptIndex + 1);
      }, scriptItem.delay || 0);
    }
  }, [scriptIndex]);

  const submitMessage = () => {
    if (!inputRef.current?.textContent) return;
    if( !isScriptFinished && !isWaitingForInput) return;

    const name = script[scriptIndex].name as string;
    const answer = inputRef.current.textContent;

    inputRef.current.textContent = "";
    setMessages([...messages, { message: answer, isFromUser: true }]);
    setScriptIndex(scriptIndex + 1);
    sessionStorage.setItem(name, answer);
  };

  return (
    <div className="flex flex-col justify-center w-full h-[calc(100vh-3rem)] md:w-3/5 max-w-[500px]">
      <div className="h-full grow flex flex-col-reverse overflow-y-scroll">
        <div className="w-full flex flex-col justify-end pb-2 px-2">
          {messages.map((message) => (
            <Message {...message} key={message.message}></Message>
          ))}
        </div>
      </div>

      <div className="flex w-full gap-5 p-2">
        <span
          ref={inputRef}
          role="textbox"
          contentEditable
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // two hours spent on this two lines
              e.preventDefault();
              e.stopPropagation();
              submitMessage();
            }
          }}
          className="w-full px-4 py-1 border border-amber-300 text-lg resize-y outline-none text-center rounded-2xl"
        ></span>
        <motion.button
          whileTap={{scale: 0.9}}
          onClick={submitMessage}
          className="h-10 aspect-square text-lg self-end bg-amber-300 rounded-full flex items-center justify-center"
        >
          <CgArrowUp></CgArrowUp>
        </motion.button>
      </div>
    </div>
  );
}

export default Chat;
