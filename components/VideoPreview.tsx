import { FC } from 'react'
import Image from 'next/image'

interface VideoPreviewProps {
  videoId: string
  // TODO - Make sure you have the right type for onClick
  onClick: () => void
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoId, onClick }) => {
  return (
    <div className="h-fit relative hover:opacity-70" onClick={onClick}>
      <Image
        src={`https://sandyshomevideos.s3.amazonaws.com/thumbnails/${videoId}.png`}
        alt="TODO"
        fill
        style={{
          objectFit: 'contain',
        }}
        className="!h-auto !relative"
      />
    </div>
  )
}

export default VideoPreview
