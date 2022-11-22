import React from 'react'

import { useState, useEffect } from 'react'

import { fetchAPI } from '../utils/fetchAPI'
import { Category, Videos } from './'

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('알간지Alganzi')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    // &type=video 비디오 타입만 나오도록 설정
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      // (data) => console.log(data.items)
      (data) => setVideos(data.items)
    )
  }, [selectCategory])

  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory}</h2>
        <Videos videos={videos} />
      </section>
    </main>
  )
}

export default MainConts
