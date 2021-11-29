import React from 'react'
import Link from 'next/link'

import { FiMail } from 'react-icons/fi'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'

import styles from '../../styles/HeadingBar.module.scss'

const HeadingBar = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.menuGroupLeft}>

                <Link href="mailto:mhhasanul@gmail.com" passHref>
                    <div className={styles.link}>
                        <FiMail />
                        <a aria-label="email">mhhasanul@gmail.com</a>
                    </div>
                </Link>

                <Link href="tel:(12345)67890" passHref>
                    <div className={styles.link}>
                        <MdOutlinePhoneInTalk />
                        <a aria-label="phone">(12345)67890</a>
                    </div>
                </Link>

            </div>

            <div className={styles.menuGroupRight}>
                <Link href="/login" passHref>
                    <div className={styles.link}>
                        <a>Login</a>
                        <AiOutlineUser />
                    </div>
                </Link>

                <Link href="/wishlist" passHref>
                    <div className={styles.link}>
                        <a>Wishlist</a>
                        <AiOutlineHeart />
                    </div>
                </Link>

                <Link href="/cart" passHref>
                    <div className={styles.link}>
                        <a><BsCart aria-label="Open Cart" /></a>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeadingBar;