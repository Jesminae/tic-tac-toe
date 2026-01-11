import { useState } from 'react';
import { motion } from 'framer-motion';

export default function PlayerSetup({ onStartGame }) {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (player1.trim() && player2.trim()) {
            onStartGame(player1, player2);
        }
    };

    return (
        <motion.div
            className="setup-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Tic Tac Toe</h1>
            <form onSubmit={handleSubmit} className="input-group">
                <input
                    type="text"
                    placeholder="Player 1 (X)"
                    value={player1}
                    onChange={(e) => setPlayer1(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Player 2 (O)"
                    value={player2}
                    onChange={(e) => setPlayer2(e.target.value)}
                    required
                />
                <button type="submit" disabled={!player1 || !player2}>
                    Start Game
                </button>
            </form>
        </motion.div>
    );
}
