import { motion } from 'framer-motion';

export default function Square({ value, onSquareClick, isWinning }) {
    return (
        <button
            className={`square ${isWinning ? 'winning' : ''}`}
            onClick={onSquareClick}
        >
            <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: value ? 1 : 0, opacity: value ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {value}
            </motion.span>
        </button>
    );
}
