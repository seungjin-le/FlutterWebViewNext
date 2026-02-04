import { useLocation, useNavigate } from '@tanstack/react-router'
import _, { omit } from 'lodash'
import { useCallback, useMemo } from 'react'

type SearchType = Record<string, string | number | Record<string, string> | string[] | number[]>

type ReturnType<T> = {
  query: T
  push: (newSearch: SearchType) => void
  searchPush: (newSearch: SearchType) => void
  reset: () => void
}

export function useQueryParams<T extends Record<string, string | number | string[] | number[]>>(keys: string[]): ReturnType<T> {
  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const query = useMemo(() => _.pick(search, keys) as T, [search, keys])

  const push = useCallback((newSearch: SearchType) => {
    const filterSearch = _.pick(newSearch, keys) || {}

    navigate({ replace: true, to: pathname, search: { ...search, ...filterSearch } })
  }, [])

  const searchPush = (newSearch: SearchType) => {
    const filterSearch = _.pick(newSearch, keys) || {}

    navigate({ replace: true, to: pathname, search: { ...search, ...filterSearch, page: 1 } })
  }

  const reset = () => {
    const cleanParams = omit(search, keys) || {}
    navigate({ replace: true, to: pathname, search: cleanParams })
  }

  return { query, push, searchPush, reset }
}
