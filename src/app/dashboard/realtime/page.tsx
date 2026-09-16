'use client'
import { useState, useEffect } from 'react'
import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'

export default function RealtimePage() {
  const [visitors, setVisitors] = useState(247)
  const [orders, setOrders] = useState(12)
  const [revenue, setRevenue] = useState(847.50)
  const [activity, setActivity] = useState([
    { time: '10:23:45', event: 'New visitor from New York, US', page: '/products/wireless-pro-headphones' },
    { time: '10:23:42', event: 'Added to cart: Smart Fitness Watch', page: '/cart' },
    { time: '10:23:38', event: 'Order placed: ORD-7843 ($149.99)', page: '/checkout' },
    { time: '10:23:35', event: 'Page view: /collections/electronics', page: '/collections' },
    { time: '10:23:30', event: 'New visitor from London, UK', page: '/' },
    { time: '10:23:28', event: 'Product view: Ergonomic Office Chair', page: '/products' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors(v => v + Math.floor(Math.random() * 5) - 2)
      if (Math.random() > 0.7) { setOrders(o => o + 1); setRevenue(r => r + 45 + Math.random() * 200) }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Real-time Dashboard</h2><p className="text-gray-500">Live store activity</p></div><div className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" /><span className="text-sm text-gray-600">Live</span></div></div>
      <div className="grid grid-cols-3 gap-4">
        <Card><p className="text-sm text-gray-500">Active Visitors</p><p className="text-3xl font-bold text-shop-600 mt-1">{visitors}</p><p className="text-xs text-emerald-600 mt-1">+{Math.floor(Math.random()*10)} in last 5 min</p></Card>
        <Card><p className="text-sm text-gray-500">Orders Today</p><p className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{orders}</p><p className="text-xs text-emerald-600 mt-1">{formatCurrency(revenue)} revenue</p></Card>
        <Card><p className="text-sm text-gray-500">Conversion</p><p className="text-3xl font-bold text-emerald-600 mt-1">3.2%</p><p className="text-xs text-gray-400 mt-1">vs 2.8% yesterday</p></Card>
      </div>
      <Card><CardTitle>Live Activity Feed</CardTitle><div className="space-y-2 mt-4">
        {activity.map((a, i) => <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
          <Badge variant={a.event.includes('Order') ? 'success' : a.event.includes('visitor') ? 'shop' : 'default'} className="shrink-0">{a.event.includes('Order') ? 'Order' : a.event.includes('visitor') ? 'Visitor' : 'Action'}</Badge>
          <div className="flex-1 min-w-0"><p className="text-sm text-gray-700 dark:text-gray-300 truncate">{a.event}</p><p className="text-xs text-gray-400">{a.page}</p></div>
          <span className="text-xs text-gray-400 shrink-0">{a.time}</span>
        </div>)}</div></Card>
    </div>
  )
}
