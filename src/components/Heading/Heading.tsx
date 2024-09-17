import React from 'react'
import styles from './Heading.module.css'

interface IHeading {
	heading: string
	color: object
}

const Heading: React.FC<IHeading> = ({ heading, color }) => {
	return (
		<div className={styles.heading} style={color}>
			{heading}
		</div>
	)
}

export default Heading
