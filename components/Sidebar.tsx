import {
  Home,
  Hash,
  Bell,
  Mail,
  Bookmark,
  List,
  User,
  MoreHorizontal,
} from 'react-feather'
import Link from 'next/link'

const links = [
  { label: 'Home', Icon: (props) => <Home {...props} />, link: '/home' },
  { label: 'Explore', Icon: (props) => <Hash {...props} />, link: '/explore' },
  {
    label: 'Notifications',
    Icon: (props) => <Bell {...props} />,
    link: '/notifications',
  },
  {
    label: 'Messages',
    Icon: (props) => <Mail {...props} />,
    link: '/messages',
  },
  {
    label: 'Bookmarks',
    Icon: (props) => <Bookmark {...props} />,
    link: '/bookmarks',
  },
  { label: 'Lists', Icon: (props) => <List {...props} />, link: '/lists' },
  { label: 'Profile', Icon: (props) => <User {...props} />, link: '/profile' },
  {
    label: 'More',
    Icon: (props) => <MoreHorizontal {...props} />,
    link: '/more',
  },
]

const Sidebar = () => {
  return (
    <div>
      {links.map((link) => (
        <Link href={link.link}>
          <div>
            <div>
              <link.Icon color="black" size={28} />
            </div>
            <div>{link.label}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
