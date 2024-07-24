import playIcon from '@/public/icons/play.png'
import heroFull from '@/public/images/hero-image.webp'

export const navLinks = [
  { name: 'Destinations', href: '/destinations' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Flights', href: '/flights' },
  { name: 'Bookings', href: '/bookings' },
  { name: 'login', href: '/login' },
]

export const hero = {
  'h4': 'Best Destinations around the world',
  'h1': 'Travel, enjoy and live a new and full life',
  'p': 'Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.',
  image: heroFull,
  btn1: {
    title: 'Find out more',
    href: '/destinations',
    color: 'primary',
    icon: null
  },
  btn2: {
    title: 'Play Demo',
    href: '/',
    color: 'secondary',
    icon: playIcon
  },
}