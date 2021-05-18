import { getCurrentInstance } from '@vue/composition-api'
import { format, subDays } from 'date-fns'
import { es, gl } from 'date-fns/locale'

export default (date: number | Date, formatString?: string) => {
  if (formatString === undefined) {
    formatString = 'E, d LLLL yyyy'
  }
  const instance = getCurrentInstance()
  const locale = ((instance?.proxy as any).$i18n.locale || '').toLowerCase()
  const localeObj = locale === 'gl-es' ? gl : es

  return format(date, formatString, { locale: localeObj })
}
