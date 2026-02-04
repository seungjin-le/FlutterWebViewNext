import { useQuery } from '@tanstack/react-query'
import { mockUsers } from '../utils/mockData'

// Mock API call - replace with actual API
const fetchUsers = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return mockUsers
}

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })
}
