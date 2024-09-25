import { Switch } from '@headlessui/react'
import { LuSun as Sun } from 'react-icons/lu'
import { WiMoonWaxingCrescent3 as Moon } from 'react-icons/wi'
import { useTheme } from '~/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative inline-flex h-6 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 data-[checked]:bg-indigo-600"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === 'dark' && <Sun className="size-5 text-yellow-300" />}
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-3"
      />
      {theme === 'light' && <Moon className="ml-2 size-5" />}
    </Switch>
  )
}
