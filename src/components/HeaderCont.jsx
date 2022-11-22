import React from 'react'

import { Link } from 'react-router-dom'

import { SearchBar } from './'

import { SlSocialYoutube } from 'react-icons/sl'

const HeaderCont = () => {
  return (
    <div id="header">
      <h1 className="logo">
        <Link to="/">
          <SlSocialYoutube className="icon" />
          Brain Youtube
        </Link>
      </h1>
      <SearchBar />
    </div>
  )
}

export default HeaderCont
