import { motion } from "framer-motion";

type MessageProps = {
  message: string;
  isFromUser?: boolean;
};

function Message({ message, isFromUser }: MessageProps) {
  return (
    <motion.div
      className="w-full flex flex-col mt-2"
      style={{ originX: isFromUser ? 1 : 0, originY: 1 }}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <motion.span
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-md px-4 py-2 max-w-[60%] break-words text-wrap rounded-2xl shadow-sm shadow-slate-600/50
         bg-gradient-to-br from-amber-200/50 via-yellow-400/60 to-yellow-500/50 via-35%
         ${!isFromUser ? "self-start" : "self-end"}`}
      >
        {message}
      </motion.span>
    </motion.div>
  );
}


export {Message}
export type {MessageProps}