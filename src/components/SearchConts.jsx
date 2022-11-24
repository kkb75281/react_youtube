import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchAPI } from '../utils/fetchAPI'
import { Videos } from './'

const SearchConts = () => {
  const [videos, setVideos] = useState(null)
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <section className="searchConts">
      <div className="container">
        <div className="search__inner">
          <div className="result">'{searchTerm}' 검색 결과입니다.</div>
          <div className="searchVideos">
            <Videos videos={videos} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchConts
