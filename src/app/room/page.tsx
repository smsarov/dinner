"use client";

import { redirect } from "next/navigation";
import React, { useState, useEffect } from "react";
import { socket } from "@/socket";

import ResultView from "./ResultView";
import TopBar from "./TopBar";
import useInfo from "@/hooks/useInfoProvided";

function Room() {
  useInfo(() => redirect("/chat"))

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });
  }, []);

  if(!connected) return <div>Not Connected yet, wait a bit</div>

  return (
    <div className="w-96 md:w-1/2 pb-10 relative">

      <TopBar></TopBar>
      <ResultView
      ></ResultView>
    </div>
  );
}

export default Room;
