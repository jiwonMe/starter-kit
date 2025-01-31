import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import '../styles/index.css';

const notoSansKR = Noto_Sans_KR({
	subsets: ['latin', 'latin-ext'],
	weight: ['400', '700'],
	variable: '--font-noto-sans-kr',
});

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		(window as any).adjustIframeSize = (id: string, newHeight: string) => {
			const i = document.getElementById(id);
			if (!i) return;
			// eslint-disable-next-line radix
			i.style.height = `${parseInt(newHeight)}px`;
		};
	}, []);
	return (
		<ThemeProvider attribute="class">
			<Component {...pageProps} className={notoSansKR.variable} />
		</ThemeProvider>
	);
}
