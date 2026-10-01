import React from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { Title } from '@mantine/core'

const PrivateRoutes = () => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  const location = useLocation()

  if (!token) {
    return <Navigate to="/auth/login" replace />
  }

  if (token && role === 'ADMIN') {
    const navItems = [
      {
        name: 'Dashboard',
        path: '/admin/dashboard',
      },
      {
        name: 'Add Blog',
        path: '/admin/blogs/add',
      },
    ]

    return (
      <div className="min-h-screen bg-gray-100">

        {/* Fixed Sidebar */}
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-gray-950 text-white">

          {/* Sidebar Content */}
          <div className="flex h-full flex-col">

            {/* Logo / Header */}
            <div className="shrink-0 border-b border-gray-800 px-6 py-6">
              <Title order={3} className="!text-white">
                Admin Panel
              </Title>

              <p className="mt-1 text-sm text-gray-400">
                Manage your application
              </p>
            </div>

            {/* Scrollable Navigation */}
            <nav className="flex-1 overflow-y-auto px-4 py-6">

              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Menu
              </p>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>

              {/* Example additional menu */}
              <p className="mb-3 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Other
              </p>

              <div className="flex flex-col gap-2">
                <Link
                  to="/"
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                >
                  Home
                </Link>

                <Link
                  to="/admin/users"
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                >
                  Users
                </Link>

                <Link
                  to="/admin/settings"
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                >
                  Settings
                </Link>
              </div>

            </nav>

            {/* Sidebar Footer */}
            <div className="shrink-0 border-t border-gray-800 p-4">
              <div className="rounded-lg bg-gray-900 p-3">
                <p className="text-sm font-medium text-white">
                  Administrator
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Admin Account
                </p>
              </div>
            </div>

          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-64 min-h-screen">

          {/* Optional Top Bar */}
          <header className="sticky top-0 z-30 flex h-16 items-center border-b border-gray-200 bg-white px-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Admin Dashboard
            </h2>
          </header>

          {/* Page Content */}
          <div className="p-6">
            <Outlet />
          </div>

        </main>

      </div>
    )
  }

  // If user has a token but isn't an admin
  return <Navigate to="/" replace />
}

export default PrivateRoutes
