import styles from '../styles/Navbar.module.css';
import Link from 'next/link'
const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
            <Link href="/">
                <a>
                    <h3 className={styles.blogName}> Tech + Lifestyle </h3>
                </a>
            </Link>

            <img className={styles.search} src="/search.svg" alt="Search" />
        </header>
    )
}

export default Navbar
