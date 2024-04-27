import React from 'react'
import { Status } from '@/utils/roomUtils/types'
import { AnimatePresence, motion } from 'framer-motion'

function ReadyButton({status, handlePress}: {status: Status, handlePress: () => void}) {
  return (
    <AnimatePresence>
    {status === "not ready" && (
      <motion.button
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        disabled={status !== "not ready"}
        className="py-1 px-6 border font-semibold bg-gradient-to-br from-amber-200/50 via-yellow-400/60 to-yellow-500/50 via-35%"
        onClick={handlePress}
      >
        ready
      </motion.button>
    )}
  </AnimatePresence>
  )
}

export default ReadyButton