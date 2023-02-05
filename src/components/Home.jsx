import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5, duration: 0.5 }}
			className='home container'
		>
			<h2>Welcome to Pizza Joint</h2>

			<Link to='/base'>
				<motion.button
					whileHover={{ scale: 1.1, textShadow: "0 0 8px white", boxShadow: "0 0 8px white" }}
				>
					Create Your Pizza
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Home;
