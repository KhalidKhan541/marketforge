'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/contexts/SidebarContext'
import { SIDEBAR_NAV } from '@/lib/constants'

export default function Sidebar() {
  const pathname = usePathname()
  const { collapsed } = useSidebar()
  return (
    <aside className={cn('fixed left-0 top-0 z-40 h-screen bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all', collapsed ? 'w-[68px]' : 'w-64')}>
      <div className="flex items-center gap-3 px-5 h-16 border-b border-gray-100 dark:border-gray-800 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-shop-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-bold shrink-0">M</div>
        {!collapsed && <span className="text-lg font-bold text-gray-900 dark:text-white">MarketForge</span>}
      </div>
      <nav className="flex-1 px-3 py-4 space-y-4 overflow-y-auto">
        {SIDEBAR_NAV.map(section => (
          <div key={section.section}>
            {!collapsed && <p className="px-3 text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">{section.section}</p>}
            {section.items.map(item => {
              const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
              return (<Link key={item.name} href={item.href} title={collapsed ? item.name : undefined}
                className={cn('flex items-center gap-3 rounded-xl text-sm font-medium transition-all mb-1', collapsed ? 'px-3 py-2.5 justify-center' : 'px-3 py-2.5', active ? 'bg-shop-50 dark:bg-shop-500/10 text-shop-700 dark:text-shop-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900')}>
                <span className="shrink-0">{item.icon}</span>{!collapsed && <span className="truncate">{item.name}</span>}
              </Link>)
            })}
          </div>
        ))}
      </nav>
      {!collapsed && <div className="mx-3 mb-3 p-3 bg-gradient-to-br from-shop-50 to-fuchsia-50 dark:from-shop-500/10 dark:to-fuchsia-500/10 rounded-xl shrink-0">
        <p className="text-xs font-medium text-gray-700 dark:text-gray-300">Today&apos;s Revenue</p><p className="text-lg font-bold text-shop-600 dark:text-shop-400 mt-1">$3,247.80</p>
        <p className="text-[10px] text-emerald-600 mt-1">↑ 12.3% vs yesterday</p>
      </div>}
      <div className="px-3 py-3 border-t border-gray-100 dark:border-gray-800 shrink-0">
        <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-shop-500 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">KK</div>
          {!collapsed && <div className="flex-1 min-w-0"><p className="text-sm font-medium text-gray-900 dark:text-white truncate">Khalid Khan</p><p className="text-[10px] text-gray-400">Owner</p></div>}
        </div>
      </div>
    </aside>
  )
}
