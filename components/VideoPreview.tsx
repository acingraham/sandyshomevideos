import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface VideoPreviewProps {
  videoId: string
}

const VideoPreview: FC<VideoPreviewProps> = ({ videoId }) => {
  return (
    <Link
      href={{ query: { videoId } }}
      scroll={false}
      className="h-fit relative hover:opacity-70"
    >
      <Image
        src={`https://sandyshomevideos.s3.amazonaws.com/thumbnails/${videoId}.full.png`}
        alt={`Video ${videoId} Thumbnail`}
        fill
        style={{
          objectFit: 'contain',
        }}
        className="!h-auto !relative"
      />
    </Link>
  )
}

export default VideoPreview
