import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'
import Constants from 'expo-constants';

const { apiUrl } = Constants.expoConfig?.extra || {};

type MediaItemType = {
  id: string,
  media_type: 'image' | 'video',
}

type MediaItemProps = {
  media: MediaItemType
  style?: StyleProp<ImageStyle>
}

const MediaItem = ({ media, style }: MediaItemProps) => {
    const uri = apiUrl + "/api/v1/media/" + media.id + "/"
  return (
    <Image source={{ uri }} style={style} />
  )
}

export default MediaItem

export type { MediaItemType }
