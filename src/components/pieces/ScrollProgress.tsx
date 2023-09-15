import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        zIndex: 2,
        top: 0,
        left: 0,
        right: 0,
        height: 5,
        backgroundColor: "orange",
        transformOrigin: "0%",
      }}
    />
  );
}

export default ScrollProgress;
