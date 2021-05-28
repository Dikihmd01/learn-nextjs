import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Diki Hamdani'
export const siteTitle = 'Belajar Next.JS'

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />

                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                {home ? (
                <>
                    {/* <Image
                    priority
                    src="/images/profile.png"
                    className={utilStyles.borderCircle}
                    height={200}
                    width={180}
                    alt={name}
                    /> */}

                    <div className={styles.page}>
                        <nav className={`${styles["page__menu"]} $ {styles["page__custom_settings"]} ${styles["menu"]}`}>
                            <ul className={`${styles["menu__list"]} ${styles["r-list"]}`}>
                                <li className={`${styles["menu_group"]}`}>
                                    <a href="#0" className={`${styles["menu__link"]} ${styles["r-link"]} ${styles["text-underlined"]}`}>Option #1</a>
                                </li>

                                <li className={`${styles["menu_group"]}`}>
                                    <a href="#0" className={`${styles["menu__link"]} ${styles["r-link"]} ${styles["text-underlined"]}`}>Option #2</a>
                                </li>

                                <li className={`${styles["menu_group"]}`}>
                                    <a href="#0" className={`${styles["menu__link"]} ${styles["r-link"]} ${styles["text-underlined"]}`}>Option #3</a>
                                </li>
                            </ul>
                        </nav>
                    </div><br/><br/><br/>


                    {/* <h1 className={utilStyles.heading2Xl}>{name}</h1> */}
                </>
                ) : (
                <>
                    <div className={styles.page}>
                        <nav className={`${styles["page__menu"]} $ {styles["page__custom_settings"]} ${styles["menu"]}`}>
                            <ul className={`${styles["menu__list"]} ${styles["r-list"]}`}>
                                <li className={`${styles["menu_group"]}`}>
                                    <a href="#0" className={`${styles["menu__link"]} ${styles["r-link"]} ${styles["text-underlined"]}`}>Option #1</a>
                                </li>

                                <li className={`${styles["menu_group"]}`}>
                                    <a href="#0" className={`${styles["menu__link"]} ${styles["r-link"]} ${styles["text-underlined"]}`}>Option #2</a>
                                </li>

                                <li className={`${styles["menu_group"]}`}>
                                    <a href="#0" className={`${styles["menu__link"]} ${styles["r-link"]} ${styles["text-underlined"]}`}>Option #3</a>
                                </li>
                            </ul>
                        </nav>
                    </div><br/><br/><br/>
                </>
                )}
            </header>

            <main className={styles.main}>{children}</main>

            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}

            <div className={styles.footer}>This is a footer.
                This stays at the bottom of the page.
            </div>
        </div>        
    )
}