import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
	children,
	title,
}) => {
	return (
		<div className={styles.layout}>
			<header>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/cart'>Cart</Link>
				</nav>
			</header>
			{title && <h1 className={styles.heading}>{title}</h1>}
			{children}
		</div>
	)
}

export default Layout
