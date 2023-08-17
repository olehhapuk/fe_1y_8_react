import { AnimatePresence, motion } from 'framer-motion';

function HeightAnim({ active, children }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{
            height: 0,
          }}
          animate={{
            height: 'auto',
          }}
          exit={{
            height: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          style={{
            overflow: 'hidden',
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default HeightAnim;
