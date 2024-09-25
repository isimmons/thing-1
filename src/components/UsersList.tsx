import useUsers from '~/hooks/useUsers'

const UsersList = () => {
  const { data, isLoading } = useUsers()

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <ul className="list-none rounded-md border border-slate-300 p-4">
        {data?.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </>
  )
}

export default UsersList
