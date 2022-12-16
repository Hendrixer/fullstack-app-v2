'use client'
import Link from 'next/link'
import { Settings, User, Grid, Calendar } from 'react-feather'

const icons = { Settings, User, Grid, Calendar }

const SidebarLink = ({ link }) => {
  const Icon = icons[link.icon]
  return (
    <Link href={link.link} className="w-full flex justify-center items-center">
      <Icon
        size={40}
        className="stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out"
      />
    </Link>
  )
}

export default SidebarLink
