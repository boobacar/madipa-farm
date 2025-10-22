import { motion } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, y = 16, once = false, amount = 0.25 }){
  return (
    <motion.div
      style={{ willChange: 'transform, opacity' }}
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, amount, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  )
}
