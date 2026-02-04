import _ from 'lodash'
import { useCallback, useEffect, useRef, useState } from 'react'

interface PageInfo {
  page: number
  size: number
  sort?: string
  total_count: number
  total_pages: number
}

export function useTableCustom<T>(initialRows: T[], pageInfo?: PageInfo, callback?: (page: number) => void) {
  const [rows, setRows] = useState<T[]>(initialRows)
  const { size = 10, total_count = 0, page: pageInfoPage = 1 } = pageInfo || { size: 10, total_count: 0, page: 1 }
  const page = useRef(pageInfoPage)

  // 페이지 변경 핸들러
  const onChange = useCallback(
    (newPage: number) => {
      if (newPage < 1) return
      else page.current = Math.min(newPage, Math.ceil(total_count / size))
      callback?.(newPage)
    },
    [total_count, size],
  )

  // 순서 변경 핸들러
  const moveRow = useCallback((index: number, direction: 'up' | 'down') => {
    setRows((prev) => {
      const newRows = [...prev]
      const targetIndex = direction === 'up' ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= newRows.length) return prev
      ;[newRows[index], newRows[targetIndex]] = [newRows[targetIndex], newRows[index]]
      return newRows
    })
  }, [])

  useEffect(() => {
    if (pageInfoPage !== page.current) page.current = pageInfoPage
    if (!_.isEqual(rows, initialRows)) setRows(initialRows)
  }, [initialRows])

  return {
    // pagination 객체
    pagination: {
      page: page.current,
      pageSize: size,
      total: total_count,
      onChange,
      maxPages: 5,
    },
    // 테이블 데이터
    data: rows,
    // 외부에서 직접 rows 접근 가능
    rows,
    setRows,
    // 순서 변경 관련
    moveRow,
    // 페이지 관련 값
    page: page.current,
    pageSize: size,
    total: total_count,
  }
}
