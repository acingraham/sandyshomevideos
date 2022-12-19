import { FC, useState } from 'react'
import Image from 'next/image'

interface VideoPreviewProps {
  videoId: string
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoId }) => {
  const [on, setOn] = useState(false)
  return (
    <div
      className="h-fit relative hover:opacity-50"
      onClick={() => setOn((prev) => !prev)}
    >
      <div>{on.toString()}</div>
      {on ? (
        <video controls>
          <source
            src={`https://sandyshomevideos.s3.amazonaws.com/videos/${videoId}.mp4`}
          />
        </video>
      ) : (
        <Image
          src={`https://sandyshomevideos.s3.amazonaws.com/thumbnails/${videoId}.png`}
          alt="TODO"
          fill
          style={{
            objectFit: 'contain',
          }}
          className="!h-auto !relative"
        />
      )}
    </div>
  )
}
/*
const VideoPreview2: FC<VideoPreviewProps> = ({ videoId }) => {
  const [playing, setPlaying] = useState(false)
  console.log({ playing })
  return (
    <div
      className="h-fit relative hover:opacity-50"
      onClick={() => {
        console.log('clicky')
        setPlaying(true)
        console.log('after calling setOn')
      }}
    >
      <div>on: {playing.toString()}</div>
      {playing ? (
        <video controls>
          <source
            src={`https://sandyshomevideos.s3.amazonaws.com/videos/${videoId}.mp4`}
          />
        </video>
      ) : (
        <Image
          src={`https://sandyshomevideos.s3.amazonaws.com/thumbnails/${videoId}.png`}
          alt="TODO"
          fill
          style={{
            objectFit: 'contain',
          }}
          className="!h-auto !relative"
        />
      )}
    </div>
  )
}
*/

export default VideoPreview
