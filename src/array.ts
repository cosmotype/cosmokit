import { isNullable } from './misc'

export function contain(array1: readonly any[], array2: readonly any[]) {
  return array2.every(item => array1.includes(item))
}

export function intersection<T>(array1: readonly T[], array2: readonly T[]) {
  return array1.filter(item => array2.includes(item))
}

export function difference<S>(array1: readonly S[], array2: readonly any[]) {
  return array1.filter(item => !array2.includes(item))
}

export function union<T>(array1: readonly T[], array2: readonly T[]) {
  return Array.from(new Set([...array1, ...array2]))
}

export function deduplicate<T>(array: readonly T[]) {
  return [...new Set(array)]
}

export function remove<T>(list: T[], item: T) {
  const index = list.indexOf(item)
  if (index >= 0) {
    list.splice(index, 1)
    return true
  }
}

export function makeArray<T>(source: T | T[]) {
  return Array.isArray(source) ? source : isNullable(source) ? [] : [source]
}
