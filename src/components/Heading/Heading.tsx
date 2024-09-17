import React from 'react'
import styles from './Heading.module.css'

interface IHeading {
	heading: string
}

const Heading: React.FC<IHeading> = ({ heading }) => {
	return <div className={styles.heading}>{heading}</div>
}

export default Heading
