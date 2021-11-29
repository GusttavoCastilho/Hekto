import React from 'react'
import Link from 'next/link'

import { FiSearch } from 'react-icons/fi'

import styles from '../../styles/Header.module.scss'

import Button from '../Button';
import Input from '../Input';


const Header = () => {
    return (
        <div className={styles.wrapper}>

            {/* Title */}
            <Link href="/" passHref>
                <h1 className={styles.title}>Hekto</h1>
            </Link>

            {/* nav */}
            <nav className={styles.nav}>
                <Link href="/" passHref>
                    <a>Home</a>
                </Link>
                <Link href="/pages" passHref>
                    <a>Pages</a>
                </Link>
                <Link href="/products" passHref>
                    <a>Products</a>
                </Link>
                <Link href="/blog" passHref>
                    <a>Blog</a>
                </Link>
                <Link href="/shop" passHref>
                    <a>Shop</a>
                </Link>
                <Link href="/contact" passHref>
                    <a>Contact</a>
                </Link>
            </nav>

            <div className={styles.search}>
                <Input />
                <Button size="small" icon={<FiSearch />} />
            </div>
        </div>
    )
}

export default Header;