import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../utils/api'

export default function useUsers() {
  return useQuery({ queryKey: ['users'], queryFn: getUsers })
}
