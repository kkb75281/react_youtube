import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'
import { Videos } from './'
const ChannelConts = () => {
  const [channelDetail, setchannelDetail] = useState()
  const [videos, setVideos] = useState(null)
  const { id } = useParams()
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`)
      setchannelDetail(data?.items[0])
      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      )
      setVideos(videosData?.items)
    }
    fetchResults()
  }, [id])
  return (
    <section id="channelConts">
      <div
        className="channel-header"
        style={{
          backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
        }}
      ></div>
      <div className="channel-info">
        <img src={channelDetail?.snippet?.thumbnails?.medium?.url} alt="dd" />
        <h3>{channelDetail?.snippet?.title}</h3>
        <div>
          <span>구독자 수 : {channelDetail?.statistics?.subscriberCount}</span>
          <br />
          <span>총 비디오 갯수 : {channelDetail?.statistics?.videoCount}</span>
          <br />
          <span>비디오 카운트 : {channelDetail?.statistics?.viewCount}</span>
        </div>
      </div>
      <div className="channel-videos">
        <Videos videos={videos} />
      </div>
    </section>
  )
}
export default ChannelConts
