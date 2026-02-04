import { useQuery } from '@tanstack/react-query'
import { mockSalesData } from '../utils/mockData'

// Mock API call - replace with actual API
const fetchSalesData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockSalesData
}

export const useSalesData = () => {
  return useQuery({
    queryKey: ['salesData'],
    queryFn: fetchSalesData,
  })
}
