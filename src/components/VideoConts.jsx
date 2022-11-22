import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    // relatedToVideoId 있어야 플레이 가능
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  // const {
  //   snippet: { title, channelId, channelTitle },
  //   statistics: { viewCount, likeCount },
  // } = videoDetail

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__inner">
          <div className="left">
            <div className="video">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
              />
            </div>
            <div className="videoTit"></div>
          </div>
          <div className="right slide">
            <Videos videos={videos} layout="column" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoConts
