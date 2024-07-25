// components
import TriangleIcon from './TriangleIcon'

// images
import heroFull from '@/public/images/hero-image.webp'
import underline from '@/public/icons/underline.webp'
import card1Image from '@/public/icons/caregory/CalculatedWeather.png'
import card2Image from '@/public/icons/caregory/BestFlights.png'
import card3Image from '@/public/icons/caregory/LocalEvents.png'
import card4Image from '@/public/icons/caregory/Customization.png'
import orangrectangle from '@/public/icons/caregory/orangrectangle.webp'
import dots from '@/public/icons/dots.webp'
import Navigation from '@/public/icons/Navigation.png'
import zigzagIcon from '@/public/icons/zigzag.png'
import RomePic from '@/public/images/Rome.png'
import LondonPic from '@/public/images/London.png'
import EuropPic from '@/public/images/Europe.png'


export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Hotels', href: '/hotels' },
  { name: 'Flights', href: '/flights' },
  { name: 'Bookings', href: '/bookings' },
]

export const hero = {
  'h6': 'Best Destinations around the world',
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

export const category = {
  'h4': 'Category',
  'h2': 'We Offer Best Services',
  cards: [
    {
      img: card1Image,
      title: 'Calculated Weather ',
      p: 'Built Wicket longer admire do barton vanity itself do in it.',

    },
    {
      img: card2Image,
      title: 'Best Flights',
      p: 'Engrossed listening. Park gate sell they west hard for the.',
    },

    {
      img: card3Image,
      title: 'Local Events',
      p: 'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
    },

    {
      img: card4Image,
      title: 'Customization ',
      p: 'We deliver outsourced aviation services for military customers',
    },

  ],
  orangrectangle: orangrectangle,
  dots: dots,
}

export const destinations = {
  h6: 'Top Selling',
  h2: 'Top Destinations',
  desCards: [
    {
      pic: RomePic,
      city: 'Rome, Italty',
      price: '$5,42k',
      location: '10 Days Trip'
    },
    {
      pic: LondonPic,
      city: 'London, UK',
      price: '$4.2k',
      location: '12 Days Trip'
    },
    {
      pic: EuropPic,
      city: 'Full Europe',
      price: '$15k',
      location: '28 Days Trip'
    },
  ],
  Navigation: Navigation,
  zigzagIcon: zigzagIcon
}