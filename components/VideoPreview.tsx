import { FC, useState } from 'react'
import Image from 'next/image'

interface VideoPreviewProps {
  videoId: string
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoId }) => {
  const [on, setOn] = useState(false)
  return on ? (
    <video controls>
      <source src={`/videos/${videoId}.mp4`} />
    </video>
  ) : (
    <Image
      src={`/thumbnails/${videoId}.png`}
      alt="TODO"
      width="180"
      height="120"
      onClick={() => setOn(true)}
    />
  )
}

export default VideoPreview
