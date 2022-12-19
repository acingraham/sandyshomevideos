import { FC, useState } from 'react'
import Image from 'next/image'

interface VideoPreviewProps {
  videoId: string
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoId }) => {
  const [on, setOn] = useState(false)
  return (
    <div
      className="h-fit relative hover:opacity-70"
      onClick={() => setOn(true)}
    >
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

export default VideoPreview
