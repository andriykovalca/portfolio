import Image from 'next/image'
import Link from 'next/link'
import headerStyles from './header.module.scss'
import { useRouter } from "next/router";
import { useTheme } from 'next-themes'

const Header = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();


    return (
        <header className={headerStyles.header}>
            <Link legacyBehavior href="/">
                <a href="/">
                    <Image
                        priority
                        src="/favicon.ico"
                        className="logo"
                        height={48}
                        width={48}
                        alt="Andriy Koval logo"
                    />
                </a>
            </Link>

            <nav className={headerStyles.links}>
                <div className={headerStyles.link}>
                    <Link legacyBehavior href="/">
                        <a className={router.pathname == "/" ? headerStyles.active : ""}>Home</a>
                    </Link>
                </div>
                <div className={headerStyles.link}>
                    <Link legacyBehavior href="/projects">
                        <a className={router.pathname == "/projects" ? headerStyles.active : ""}>Projects</a>
                    </Link>
                </div>          
                <div className={headerStyles.link}>
                    <Link legacyBehavior href="/about">
                        <a className={router.pathname == "/about" ? headerStyles.active : ""}>About</a>
                    </Link>
                </div>          
                <div className={headerStyles.link}>
                    <Link legacyBehavior href="/contact">
                        <a className={router.pathname == "/contact" ? headerStyles.active : ""}>Contact</a>
                    </Link>
                </div>
                <div className={headerStyles.link}>
                    <button className={headerStyles.modeDark} onClick={() => setTheme('dark')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
                    <button className={headerStyles.modeLight} onClick={() => setTheme('light')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button>
                </div>
            </nav>
            
            
        </header>
    );
}

export default Header;