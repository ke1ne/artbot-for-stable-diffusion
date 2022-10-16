import LazyLoad from 'react-lazyload'
import Image from 'next/image'

interface ImageDetails {
  base64String: string
  prompt: string
}

interface ImageSquareProps {
  imageDetails: ImageDetails
  size?: number
}

export default function ImageSquare({
  imageDetails,
  size = 180
}: ImageSquareProps) {
  return (
    <LazyLoad
      height={180}
      once
      className="inline-block"
      style={{ maxHeight: '180px' }}
    >
      <Image
        src={'data:image/webp;base64,' + imageDetails.base64String}
        width={size}
        height={size}
        alt={imageDetails.prompt}
        className="mx-auto rounded"
        objectFit="cover"
      />
    </LazyLoad>
  )
}
