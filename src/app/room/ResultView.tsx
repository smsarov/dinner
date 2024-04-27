import { User } from '@/utils/roomUtils/types'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface IResultView {
  result: string,
  users: User[],
  dislikes: number,
  isDisliked: boolean,
  handleDislikePressed: () => void
}

function ResultView({result, users, dislikes, handleDislikePressed, isDisliked} : IResultView) {

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
            <motion.p className=" text-wrap text-lg overflow-hidden">
              {result}
              {/* <AnimatedString string={result}></AnimatedString> */}
            </motion.p>

            <motion.button
              whileTap={{ scale: 0.9 }}
              className={
                "duration-200 text-lg text-center px-3 py-1 rounded-full shadow-slate-500 " +
                (isDisliked ? "bg-amber-400/90 shadow-sm" : "shadow-md")
              }
              onClick={handleDislikePressed}
            >
              😡 {dislikes}/{users.length}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default ResultView