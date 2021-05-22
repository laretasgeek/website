import { computed, ComputedRef } from '@vue/composition-api'

export const getYTIdFromUrl = (urlString: string) => {
  const url = new URL(urlString)
  return url.searchParams.get('v')
}

export const coverUrl = (ytUrlString: string) => {
  if (ytUrlString) {
    const id = getYTIdFromUrl(ytUrlString)
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''
  } else return ''
}

export const embedLink = (ytUrlString: string) => {
  if (ytUrlString) {
    const id = getYTIdFromUrl(ytUrlString)
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : ''
  } else {
    return ''
  }
}

export default { getYTIdFromUrl, coverUrl, embedLink }
