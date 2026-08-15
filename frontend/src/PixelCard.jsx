import { motion } from "framer-motion";

function PixelCard({ title }) {
  return (
    <motion.div
      className="pixel-card"
      whileHover={{
        scale: 1.05,
        y: -5
      }}
      whileTap={{
        scale: 0.95
      }}
    >
      {title}
    </motion.div>
  );
}

export default PixelCard;