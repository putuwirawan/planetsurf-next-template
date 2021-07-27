import React from "react";
import styles from "../styles/Header.module.css";

export const Header = () => {
	// const x =5
	return (
		<div>
			<h1 className={styles.title}>
				<span> Kopi</span> susus
			</h1>
			<p className={styles.description}>kopi susu mewadah cangkir, misi arak duang gerigen</p>
			{/* <style jsx>
				{`
					.title {
						color: ${x>3 ? 'blue': 'red'} 
					}
				`}
			</style> */}
		</div>
	);
};
