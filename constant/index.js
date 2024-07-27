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
import NextTripImage from '@/public/images/NextTripImage.webp'
import Destination from '@/public/icons/nextTrip/Destination.webp'
import Payment from '@/public/icons/nextTrip/Payment.webp'
import Airport from '@/public/icons/nextTrip/Airport.webp'
import LEAF from '@/public/icons/nextTrip/LEAF.webp'
import map from '@/public/icons/nextTrip/map.webp'
import send from '@/public/icons/nextTrip/send.webp'
import bulding from '@/public/icons/nextTrip/bulding.webp'
import heart from '@/public/icons/nextTrip/heart.webp'


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

export const bookings = {
  h6: 'Easy and Fast',
  h2: 'Book your next trip in 3 easy steps',
  ul: [
    {
      h6: 'Choose Destination',
      p: 'Lorem ipsum dolor sit amet, consectetu radipiscing elit. Urna, tortor tempus.',
      icon: Destination
    },
    {
      h6: 'Make Payment',
      p: 'Lorem ipsum dolor sit amet, consectetu radipiscing elit. Urna, tortor tempus.',
      icon: Payment
    },
    {
      h6: 'Reach Airport on Selected Date',
      p: 'Lorem ipsum dolor sit amet, consectetu radipiscing elit. Urna, tortor tempus.',
      icon: Airport
    },
  ],
  SideImageCard: {
    img: NextTripImage,
    h6: 'Trip To Greece',
    date: '14-29 June',
    by: 'by Robbin joseph',
    icons: [
      { img: LEAF, id: 1 },
      { img: map, id: 2 },
      { img: send, id: 3 },
    ],
    buldingIcon: bulding,
    buldingPara: '24 people going',
    heartIcon: heart,
    img: NextTripImage,

  }
}