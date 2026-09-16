import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_ORDERS, MOCK_WAREHOUSES } from '@/lib/mock-data'

const pending = MOCK_ORDERS.filter(o => ['Confirmed', 'Processing'].includes(o.status))
const shipped = MOCK_ORDERS.filter(o => o.status === 'Shipped')

export default function FulfillmentPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fulfillment</h2><p className="text-gray-500">Order fulfillment and warehouse operations</p></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Unfulfilled</p><p className="text-2xl font-bold text-amber-600 mt-1">{pending.length}</p></Card>
        <Card><p className="text-sm text-gray-500">In Transit</p><p className="text-2xl font-bold text-shop-600 mt-1">{shipped.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Avg Pick Time</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">4.2 min</p></Card>
        <Card><p className="text-sm text-gray-500">Accuracy Rate</p><p className="text-2xl font-bold text-emerald-600 mt-1">99.4%</p></Card>
      </div>
      <Card><CardTitle className="mb-3">Pending Orders</CardTitle>
        <div className="space-y-2">{pending.length ? pending.map(o => (
          <div key={o.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div><p className="text-sm font-medium text-gray-900 dark:text-white">{o.id}</p><p className="text-xs text-gray-500">{o.customer} · {o.items} items</p></div>
            <div className="flex items-center gap-3"><span className="text-sm font-semibold text-gray-900 dark:text-white">{o.total > 100 ? '📦 Multi-box' : '📦 Single'}</span><button className="px-3 py-1.5 bg-shop-600 text-white rounded-lg text-xs font-medium">Fulfill</button></div>
          </div>
        )) : <p className="text-sm text-gray-400 text-center py-4">All orders fulfilled! 🎉</p>}</div>
      </Card>
    </div>
  )
}
