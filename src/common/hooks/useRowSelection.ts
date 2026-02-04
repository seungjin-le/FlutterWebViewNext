import _, { uniqBy } from 'lodash'
import { useCallback, useMemo, useState } from 'react'

/**
 * 테이블 행 선택을 관리하는 Hook
 * @param data 현재 페이지 데이터
 */
export function useRowSelection<T>(data: T[]) {
  const [selectedRows, setSelectedRows] = useState<T[]>([])

  // ✅ 전체 선택 여부 계산
  const allChecked = useMemo(() => data.length > 0 && selectedRows.length === data.length, [data, selectedRows])

  // ✅ 전체 선택 토글
  const handleAllCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) setSelectedRows(data)
      else setSelectedRows([])
    },
    [data],
  )

  // ✅ 개별 행 선택 토글
  const handleRowCheck = useCallback((row: T) => {
    setSelectedRows((prev) => {
      const index = _.findIndex(prev, (r) => _.isEqual(r, row))
      if (index !== -1) return _.filter(prev, (_, i) => i !== index)
      else return [...prev, row]
    })
  }, [])

  const handleRowsCheck = useCallback((rows: T[], key?: string) => {
    if (!key) return

    setSelectedRows(uniqBy(rows, key))
  }, [])

  // ✅ 선택 초기화 함수
  const clearSelection = useCallback(() => setSelectedRows([]), [])

  return {
    selectedRows,
    allChecked,
    handleAllCheck,
    handleRowCheck,
    clearSelection,
    handleRowsCheck,
  }
}
