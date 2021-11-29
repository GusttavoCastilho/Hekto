import React from "react";

import styles from '../../styles/Button.module.scss'

type ButtonProps = {
    children?: React.ReactNode
    size?: 'small' | 'medium'
    icon?: React.ReactNode
}

const Button = ({ children, size = 'medium', icon }: ButtonProps) => {
    return (
        <button className={styles[size]}>
            {children && <label>{children}</label>}
            {icon && icon}
        </button>
    )
}

export default Button;