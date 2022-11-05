import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children, title = "Crypto Tracker"}) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="header">
                <Link legacyBehavior href='/' passHref>
                    <a>
                      <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#f0f0f0" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="164" cy="68" r="12"></circle><line x1="120" y1="136" x2="80" y2="184" fill="none" stroke="#f0f0f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><path d="M208,96v24a96,96,0,0,1-96,96H8L104,96V76A52,52,0,0,1,206.3,62.9L232,80Z" fill="none" stroke="#f0f0f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
                    </a>
                </Link>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;