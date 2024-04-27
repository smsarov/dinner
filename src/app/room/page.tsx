"use client";

import { redirect, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { socket } from "@/socket";

import { User, Status } from "@/utils/roomUtils/types";
import ReadyButton from "./ReadyButton";
import ResultView from "./ResultView";

function page() {
  if (!sessionStorage.getItem("name")) redirect("/chat");

  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<Status>("not ready");
  const [result, setResult] = useState("");
  const [dislikes, setDislikes] = useState(0);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleReadyPressed = () => {
    socket.emit("status", "ready");
  };

  const handleDislikePressed = () => {
    setIsDisliked(!isDisliked);
    socket.emit("dislike pressed", !isDisliked);
  };

  useEffect(() => {
    socket.on("connect", () => {
      socket.emit("data", {
        name: sessionStorage.getItem("name"),
        food: sessionStorage.getItem("food"),
        drink: sessionStorage.getItem("drink"),
        room_id: code,
      });
    });

    socket.on("status", (status) => {
      setStatus(status);

      if (status === "writing" || status === "ready") {
        setResult("");
        setDislikes(0);
        setIsDisliked(false);
      }
    });

    socket.on("result", (result: string) => {
      setResult(result);
    });

    socket.on("dislike pressed", (value) => setDislikes(value));

    socket.on("revalidate", (users) => setUsers(users));
  }, []);

  return (
    <div className="w-96 md:w-1/2 pb-10 relative">
      <div className="flex sticky rounded-full bg-bg-color z-10 top-0 w-full flex-wrap px-3 py-2 gap-2 *:rounded-xl *:shadow-md *:text-lg">
        <p className="py-1 px-4 border font-semibold bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-700 via-60%">#{code}</p>
        {users.map((user, index) => {
          return (
            <p key={index} className="py-1 px-4 border">
              {user.name}
            </p>
          );
        })}
        <ReadyButton
          status={status}
          handlePress={handleReadyPressed}
        ></ReadyButton>
      </div>
      <ResultView
        users={users}
        result={result}
        isDisliked={isDisliked}
        dislikes={dislikes}
        handleDislikePressed={handleDislikePressed}
      ></ResultView>
    </div>
  );
}

export default page;
