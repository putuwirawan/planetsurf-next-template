import { Link } from "@material-ui/core";
import React from "react";
import styles from "../styles/Nav.module.css";

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
                
				<li>
					<Link href="/about">about</Link>
				</li>
			</ul>
		</nav>
	);
}
