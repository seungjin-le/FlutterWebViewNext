import _ from 'lodash'
import { useCallback, useEffect, useMemo, useState } from 'react'

export function useTable<T>(initialRows: T[], pageSize = 10) {
  const [rows, setRows] = useState<T[]>(initialRows)
  const [page, setPage] = useState(1)
  const total = rows?.length ?? 0

  // 페이지 데이터 계산
  const pageData = useMemo(() => {
    const start = (page - 1) * pageSize
    return rows.slice(start, start + pageSize)
  }, [page, pageSize, rows])

  // 페이지 변경 핸들러
  const onChange = useCallback(
    (newPage: number) => {
      if (newPage < 1) return
      setPage(Math.min(newPage, Math.ceil(total / pageSize)))
    },
    [total, pageSize],
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
    if (!_.isEqual(rows, initialRows)) setRows(initialRows)
  }, [initialRows])

  return {
    // pagination 객체
    pagination: {
      page,
      pageSize,
      total,
      onChange,
      maxPages: 5,
    },
    // 테이블 데이터
    data: pageData,
    // 외부에서 직접 rows 접근 가능
    rows,
    setRows,
    // 순서 변경 관련
    moveRow,
    // 페이지 관련 값
    page,
    setPage,
    pageSize,
    total,
    pageData,
  }
}
