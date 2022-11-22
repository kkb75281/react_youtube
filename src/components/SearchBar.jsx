import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const SearchBar = () => {
  return (
    <div className="search">
      <label className="glass" htmlFor="searchInput">
        <RiSearchLine />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="유튜버를 검색하세요!"
        title="검색"
      />
    </div>
  )
}

export default SearchBar
