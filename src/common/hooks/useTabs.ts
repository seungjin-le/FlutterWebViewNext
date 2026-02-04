import { useLocation, useRouter } from '@tanstack/react-router'
import { useCallback, useEffect, useState } from 'react'

interface Tab {
  label: string
  value: string
}

export const useTabs = (initialValue: string, tabs: Tab[], clearQuery: boolean = false) => {
  const router = useRouter()
  const location = useLocation()

  const [currentTab, setCurrentTab] = useState(location.search.tab || initialValue)

  const onChange = useCallback(
    (newValue: string) => {
      setCurrentTab(newValue)
      const search = clearQuery ? {} : location.search
      router.navigate({ replace: true, to: location.pathname, search: { ...search, tab: newValue as any } })
    },
    [router, location, setCurrentTab],
  )

  useEffect(() => {
    if (location?.search?.tab !== currentTab) setCurrentTab(location?.search?.tab || initialValue)
  }, [location.search.tab])

  return { value: currentTab, onChange, tabs }
}
