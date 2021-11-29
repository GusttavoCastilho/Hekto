import React, { InputHTMLAttributes, useState } from "react";

import styles from '../../styles/Input.module.scss'

export type InputProps = {
    onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ onInput, ...rest }: InputProps) => {
    const [value, setValue] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setValue(newValue)

        !!onInput && onInput(newValue)
    }

    return (
        <input
            className={styles.wrapper}
            onChange={onChange}
            value={value}
            {...rest}
        />
    )
}

export default Input;