import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

export interface ItemImagesProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  albumId: string,
  id: string,
  title: string,
  url: string
}