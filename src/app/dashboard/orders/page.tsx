'use client'
import { useState } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MOCK_ORDERS } from '@/lib/mock-data'
import { formatCurrency, cn } from '@/lib/utils'

const statusVariant: Record<string, 'success' | 'shop' | 'info' | 'warning' | 'danger' | 'default'> = { Delivered: 'success', Shipped: 'shop', Processing: 'info', Pending: 'warning', Cancelled: 'danger', Returned: 'default', Confirmed: 'info' }
export default function OrdersPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? MOCK_ORDERS : MOCK_ORDERS.filter(o => o.status.toLowerCase() === filter)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Orders</h2><p className="text-gray-500">{MOCK_ORDERS.length} orders this month</p></div></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Total Orders</p><p className="text-2xl font-bold text-shop-600 mt-1">{MOCK_ORDERS.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Revenue</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(MOCK_ORDERS.reduce((s, o) => s + o.total, 0))}</p></Card>
        <Card><p className="text-sm text-gray-500">Fulfilled</p><p className="text-2xl font-bold text-emerald-600 mt-1">{MOCK_ORDERS.filter(o => ['Delivered', 'Shipped'].includes(o.status)).length}</p></Card>
        <Card><p className="text-sm text-gray-500">Pending</p><p className="text-2xl font-bold text-amber-600 mt-1">{MOCK_ORDERS.filter(o => ['Pending', 'Processing'].includes(o.status)).length}</p></Card>
      </div>
      <div className="flex gap-2 flex-wrap">{['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'].map(s => <button key={s} onClick={() => setFilter(s)} className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', filter === s ? 'bg-shop-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400')}>{s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}</button>)}</div>
      <Card padding={false}><div className="overflow-x-auto"><table className="w-full">
        <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Order</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Customer</th>
          <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Items</th>
          <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Total</th>
          <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Payment</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
        </tr></thead>
        <tbody>{filtered.map(o => <tr key={o.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
          <td className="px-5 py-3.5 text-sm font-mono font-medium text-gray-900 dark:text-white">{o.id}</td>
          <td className="px-5 py-3.5"><p className="text-sm text-gray-900 dark:text-white">{o.customer}</p><p className="text-xs text-gray-400">{o.email}</p></td>
          <td className="px-5 py-3.5 text-center text-sm">{o.items}</td>
          <td className="px-5 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white">{formatCurrency(o.total)}</td>
          <td className="px-5 py-3.5 text-center"><Badge variant={statusVariant[o.status]}>{o.status}</Badge></td>
          <td className="px-5 py-3.5 text-sm text-gray-500">{o.payment}</td>
          <td className="px-5 py-3.5 text-sm text-gray-400">{o.date}</td>
        </tr>)}</tbody>
      </table></div></Card>
    </div>
  )
}
