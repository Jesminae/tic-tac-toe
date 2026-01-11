import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ winner, onReset }) {
    return (
        <AnimatePresence>
            <motion.div className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div className="modal-content"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                >
                    <div className="modal-title">
                        {winner === 'Draw' ? "It's a Draw!" : `${winner} Wins!`}
                    </div>
                    <button onClick={onReset}>Play Again</button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
