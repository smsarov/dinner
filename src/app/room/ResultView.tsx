import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { socket } from "@/socket";

function ResultView() {
  const [result, setResult] = useState("");
  const [isDisliked, setIsDisliked] = useState(false);
  const [dislikes, setDislikes] = useState(0);

  const handleDislikePressed = () => {
    setIsDisliked(!isDisliked);
    socket.emit("dislike pressed", !isDisliked);
  };

  useEffect(() => {
    socket.on("result", (result: string) => setResult(result));
    socket.on("dislike pressed", (dislikes) => setDislikes(dislikes));

    socket.on("status", (status) => {
      if (status === "writing" || status === "ready") {
        setResult("");
        setDislikes(0);
        setIsDisliked(false);
      }
    });
  });

  return (
    <AnimatePresence>
      {result && (
        <motion.div
          className="px-4 py-2 overflow-hidden"
          style={{ originX: 0, originY: 0.25 }}
          initial={{ height: "100%" }}
          exit={{ height: 0, x: "-100%", opacity: 0, y: 100 }}
          transition={{
            height: { duration: 0.5 },
            x: { duration: 0.3, delay: 0.2 },
            ease: "easeIn",
          }}
        >
          <motion.p className="text-wrap text-lg overflow-hidden">
            {result}
          </motion.p>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className={
              "duration-200 text-lg text-center px-3 py-1 rounded-full shadow-slate-500 " +
              (isDisliked ? "bg-amber-400/90 shadow-sm" : "shadow-md")
            }
            onClick={handleDislikePressed}
          >
            😡 {dislikes}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResultView;
