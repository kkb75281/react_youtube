import React from 'react'

import { VideoCard, Loader } from './'

const Videos = ({ videos }) => {
  // 없을때 에러 안뜨게 > 물음표 처리
  if (!videos?.length) return <Loader />

  return (
    <article className="videos__inner">
      {videos.map((item, idx) => (
        <VideoCard key={idx} video={item} />
      ))}
    </article>
  )
}

export default Videos
