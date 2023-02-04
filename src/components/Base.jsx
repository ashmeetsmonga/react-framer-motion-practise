import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			initial={{ x: "100vw" }}
			animate={{ x: 0 }}
			transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
			className='base container'
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							whileHover={{ originX: 0, scale: 1.3 }}
							key={base}
							onClick={() => addBase(base)}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div initial={{ x: "-100vw" }} animate={{ x: 0 }} className='next'>
					<Link to='/toppings'>
						<motion.button
							whileHover={{ scale: 1.1, textShadow: "0 0 8px white", boxShadow: "0 0 8px white" }}
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;
