import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Testing the latest Nextjs</title>
				<meta name="description" content="Testing the latest" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className="text-center text-6xl font-bold">hello, Next.js!</h1>
			</main>
		</div>
	);
}
