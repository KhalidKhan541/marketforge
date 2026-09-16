import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_RETURN_RATES } from '@/lib/mock-data'

const returns = [
  { id: 'RET-001', order: 'ORD-7836', customer: 'Lisa Wang', product: 'Ergonomic Office Chair', reason: 'Wrong size', status: 'Refunded', amount: 169.98, date: '2026-09-13' },
  { id: 'RET-002', order: 'ORD-7820', customer: 'Emily Park', product: 'Memory Foam Pillow', reason: 'Not as described', status: 'Processing', amount: 49.99, date: '2026-09-11' },
  { id: 'RET-003', order: 'ORD-7815', customer: 'David Kim', product: 'Wireless Charging Pad', reason: 'Changed mind', status: 'Completed', amount: 39.99, date: '2026-09-10' },
]

export default function ReturnsPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Returns & Refunds</h2><p className="text-gray-500">Manage product returns and refund processing</p></div>
      <div className="grid grid-cols-3 gap-4">
        <Card><p className="text-sm text-gray-500">Total Returns</p><p className="text-2xl font-bold text-amber-600 mt-1">{MOCK_RETURN_RATES.total}</p></Card>
        <Card><p className="text-sm text-gray-500">Return Rate</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{MOCK_RETURN_RATES.rate}%</p></Card>
        <Card><p className="text-sm text-gray-500">Refunded</p><p className="text-2xl font-bold text-emerald-600 mt-1">$8,920</p></Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card><CardTitle className="mb-3">Top Return Reasons</CardTitle>
          <div className="space-y-3">{MOCK_RETURN_RATES.topReasons.map(r => <div key={r.reason}>
            <div className="flex items-center justify-between text-sm mb-1"><span className="text-gray-600 dark:text-gray-400">{r.reason}</span><span className="font-medium">{r.count} ({r.pct}%)</span></div>
            <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden"><div className="h-full bg-shop-500 rounded-full" style={{ width: `${r.pct}%` }} /></div>
          </div>)}</div>
        </Card>
        <Card><CardTitle className="mb-3">Recent Returns</CardTitle>
          <div className="space-y-2">{returns.map(r => <div key={r.id} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div className="flex items-center justify-between"><p className="text-sm font-medium text-gray-900 dark:text-white">{r.id}</p><Badge variant={r.status === 'Refunded' ? 'success' : 'warning'}>{r.status}</Badge></div>
            <p className="text-xs text-gray-500 mt-1">{r.customer} · {r.product}</p>
            <div className="flex items-center justify-between mt-2 text-xs text-gray-400"><span>{r.reason}</span><span className="font-medium text-gray-900 dark:text-white">${r.amount}</span></div>
          </div>)}</div>
        </Card>
      </div>
    </div>
  )
}
