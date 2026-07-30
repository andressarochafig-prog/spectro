import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'SPECTRO',
  description: 'Teses e briefings de investimento',
};

const LINKEDIN_URL = 'https://www.linkedin.com/in/andressarochafigueiredoufrrj/';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <Link href="/" className="logo">SPECTRO<span>.</span></Link>
          <nav>
            <Link href="/">Teses</Link>
            <Link href="/sobre">Sobre</Link>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">LinkedIn ↗</a>
          </nav>
        </header>

        {children}

        <footer>
          <p>Acesse também</p>
          <div className="social">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              LinkedIn
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}