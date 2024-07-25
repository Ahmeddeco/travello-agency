import playIcon from '@/public/icons/play.png'
import heroFull from '@/public/images/hero-image.webp'
import TriangleIcon from './TriangleIcon'
import underline from '@/public/icons/underline.webp'

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Flights', href: '/flights' },
  { name: 'Bookings', href: '/bookings' },
]

export const hero = {
  'h4': 'Best Destinations around the world',
  'h1': 'Travel, enjoy and live a new and full life',
  'underlineIcon': underline,
  'p': 'Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.',
  image: heroFull,
  btn1: {
    title: 'Find out more',
    href: '/destinations',
    color: 'secondary',
    icon: null,
    size: 'lg',
  },
  btn2: {
    title: 'Play Demo',
    href: '/',
    color: 'light',
    icon: <TriangleIcon />
    ,
    size: 'lg',
  },
}