import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface MainLayoutProps {
  children: ReactNode
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export default function MainLayout({ children }: MainLayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-gray-100 shadow h-24 flex items-center">
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-full items-center justify-between">
            {/* Name */}
            <div className="text-2xl font-extrabold text-black uppercase">
              <h1>Liming Zheng</h1>
            </div>
            {/* Tabs */}
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full h-full bg-gray-100">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-4xl font-extrabold text-white uppercase">Liming Zheng</h1>
          </div>
          
          {/* RightContact */}
          <div className="md:text-right">
            <h2 className="text-xl font-extrabold text-white uppercase">Contact</h2>
            <p className="text-white font-semibold not-italic normal-case text-base mt-1">felixneucs95@gmail.com</p>
            <p className="text-white font-semibold not-italic normal-case text-base">(531) 739 9370</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 