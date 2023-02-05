import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { delay: 0.2, type: "spring", stiffness: 50 },
	},
};

const Toppings = ({ addTopping, pizza }) => {
	let toppings = ["mushrooms", "peppers", "onions", "olives", "extra cheese", "tomatoes"];

	return (
		<motion.div
			variants={containerVariants}
			initial='hidden'
			animate='visible'
			className='toppings container'
		>
			<h3>Step 2: Choose Toppings</h3>
			<ul>
				{toppings.map((topping) => {
					let spanClass = pizza.toppings.includes(topping) ? "active" : "";
					return (
						<motion.li
							whileHover={{ originX: 0, scale: 1.3 }}
							key={topping}
							onClick={() => addTopping(topping)}
						>
							<span className={spanClass}>{topping}</span>
						</motion.li>
					);
				})}
			</ul>

			<Link to='/order'>
				<motion.button
					whileHover={{ scale: 1.1, textShadow: "0 0 8px white", boxShadow: "0 0 8px white" }}
				>
					Order
				</motion.button>
			</Link>
		</motion.div>
	);
};

export default Toppings;
