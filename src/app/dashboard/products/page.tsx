'use client'
import { useState } from 'react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import DataTable from '@/components/ui/DataTable'
import { MOCK_PRODUCTS } from '@/lib/mock-data'
import { formatCurrency, cn } from '@/lib/utils'

export default function ProductsPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.status.toLowerCase() === filter)
  const totalRevenue = MOCK_PRODUCTS.reduce((s, p) => s + (p.price * p.sales), 0)
  const columns = [
    { key: 'name', header: 'Product', render: (r: typeof MOCK_PRODUCTS[0]) => (
      <div className="flex items-center gap-3"><span className="text-2xl">{r.image}</span><div><p className="font-medium text-gray-900 dark:text-white">{r.name}</p><p className="text-xs text-gray-400 font-mono">{r.sku}</p></div></div>
    )},
    { key: 'category', header: 'Category', className: 'text-gray-500' },
    { key: 'price', header: 'Price', className: 'text-right font-semibold', render: (r: typeof MOCK_PRODUCTS[0]) => formatCurrency(r.price) },
    { key: 'stock', header: 'Stock', className: 'text-center', render: (r: typeof MOCK_PRODUCTS[0]) => <span className={cn('font-medium', r.stock < 300 ? 'text-red-500' : r.stock < 1000 ? 'text-amber-500' : '')}>{r.stock.toLocaleString()}</span> },
    { key: 'sales', header: 'Sales', className: 'text-right font-medium' },
    { key: 'rating', header: 'Rating', render: (r: typeof MOCK_PRODUCTS[0]) => <span>⭐ {r.rating} <span className="text-gray-400">({r.reviews})</span></span> },
    { key: 'status', header: 'Status', render: (r: typeof MOCK_PRODUCTS[0]) => <Badge variant={r.status === 'Active' ? 'success' : r.status === 'Draft' ? 'default' : 'warning'} dot>{r.status}</Badge> },
  ]
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h2><p className="text-gray-500">{MOCK_PRODUCTS.length} products</p></div><Button variant="gradient">+ Add Product</Button></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Products</p><p className="text-2xl font-bold text-shop-600 mt-1">{MOCK_PRODUCTS.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Revenue</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{formatCurrency(totalRevenue)}</p></Card>
        <Card><p className="text-sm text-gray-500">Total Sales</p><p className="text-2xl font-bold text-emerald-600 mt-1">{MOCK_PRODUCTS.reduce((s, p) => s + p.sales, 0).toLocaleString()}</p></Card>
        <Card><p className="text-sm text-gray-500">Avg Rating</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">⭐ {(MOCK_PRODUCTS.reduce((s, p) => s + p.rating, 0) / MOCK_PRODUCTS.length).toFixed(1)}</p></Card>
      </div>
      <div className="flex gap-2">{['all', 'active', 'draft', 'archived'].map(s => <button key={s} onClick={() => setFilter(s)} className={cn('px-3 py-1.5 rounded-lg text-sm font-medium', filter === s ? 'bg-shop-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400')}>{s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}</button>)}</div>
      <Card padding={false}><DataTable columns={columns} data={filtered as any} /></Card>
    </div>
  )
}
