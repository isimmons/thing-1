import UsersList from '~/components/UsersList'
import ThemeToggle from '~/components/ui/ThemeToggle'
import { Box } from './components/ui/Box'

function App() {
  return (
    <>
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>
      <div className="flex h-screen w-screen items-center justify-center bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <Box
          size="medium"
          className="flex flex-col gap-4 rounded-md border border-slate-800 p-4 dark:border-slate-200"
        >
          <h1 className="text-4xl font-bold">Hello World</h1>
          <p>Look at all the users!</p>
          <UsersList />
        </Box>
      </div>
    </>
  )
}

export default App
