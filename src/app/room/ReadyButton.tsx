import React, { useState, useEffect } from "react";
import { Status } from "@/utils/roomUtils/types";
import { AnimatePresence, motion } from "framer-motion";
import { socket } from "@/socket";

function ReadyButton() {
  const [status, setStatus] = useState<Status>("not ready");

  useEffect(() => {
    socket.on("status", (status: Status) => {
      setStatus(status);
    });
  }, []);

  const handlePress = () => {
    socket.emit("status", "ready");
  };

  return (
    <AnimatePresence>
      {status === "not ready" && (
        <motion.button
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="py-1 px-6 border font-semibold bg-gradient-to-br from-amber-200/50 via-yellow-400/60 to-yellow-500/50 via-35%"
          onClick={handlePress}
        >
          ready
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ReadyButton;
