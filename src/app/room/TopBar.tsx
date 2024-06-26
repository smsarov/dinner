"use client";

import React, { useState, useEffect } from "react";
import { socket } from "@/socket";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { UserProps } from "@/utils/roomUtils/types";
import ReadyButton from "./ReadyButton";

function TopBar() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {

    const data = {
      name: sessionStorage.getItem("name") as string,
      food: sessionStorage.getItem("food") as string,
      drink: sessionStorage.getItem("drink") as string,
    }

    socket.emit("data", {
      userProps: data,
      roomId: code,
    });

    socket.on("revalidate", (users) => setUsers(users));
  }, []);

  return (
    <div className="flex sticky rounded-full bg-bg-color z-10 top-0 w-full flex-wrap px-3 py-2 gap-2 *:rounded-xl *:shadow-md *:text-lg">
      <p className="py-1 px-4 border font-semibold bg-gradient-to-br from-pink-500 via-purple-500 to-fuchsia-700 via-60% rotate-hue">
        #{code}
      </p>
      <ReadyButton></ReadyButton>
      <AnimatePresence>
        {users.map((user, index) => {
          return (
            <motion.p
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              style={{ originX: 0, originY: 0.5 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
              className="py-1 px-4 border"
            >
              {user.name}
            </motion.p>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default TopBar;
