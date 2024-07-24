import { Poppins, Volkhov } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Providers } from './providers'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'auto',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
})
const volkhov = Volkhov({
	subsets: ['latin'],
	display: 'auto',
	weight: ['400', '700'],
	variable: '--font-volkhov',
})

export const metadata = {
	title: 'Travello',
	description: 'Travell a world of adventure',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${poppins.variable} ${volkhov.variable}`}>
				<Providers>
						<NavBar />
						{children}
						<Footer />
				</Providers>
			</body>
		</html>
	)
}
