import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_PAYMENTS } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'

const statusVariant: Record<string, 'success' | 'warning' | 'danger' | 'default' | 'info'> = { Captured: 'success', Pending: 'warning', Refunded: 'info', Failed: 'danger', Chargeback: 'danger' }

export default function PaymentsPage() {
  const totalCaptured = MOCK_PAYMENTS.filter(p => p.status === 'Captured').reduce((s, p) => s + p.amount, 0)
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payments</h2><p className="text-gray-500">Transaction history and payment status</p></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Captured</p><p className="text-2xl font-bold text-emerald-600 mt-1">{formatCurrency(totalCaptured)}</p></Card>
        <Card><p className="text-sm text-gray-500">Pending</p><p className="text-2xl font-bold text-amber-600 mt-1">{MOCK_PAYMENTS.filter(p => p.status === 'Pending').length}</p></Card>
        <Card><p className="text-sm text-gray-500">Refunded</p><p className="text-2xl font-bold text-blue-600 mt-1">{formatCurrency(MOCK_PAYMENTS.filter(p => p.status === 'Refunded').reduce((s, p) => s + p.amount, 0))}</p></Card>
        <Card><p className="text-sm text-gray-500">Failed</p><p className="text-2xl font-bold text-red-600 mt-1">{MOCK_PAYMENTS.filter(p => p.status === 'Failed').length}</p></Card>
      </div>
      <Card padding={false}><div className="overflow-x-auto"><table className="w-full">
        <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Order</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Customer</th>
          <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Amount</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Method</th>
          <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Gateway</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
        </tr></thead>
        <tbody>{MOCK_PAYMENTS.map(p => <tr key={p.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
          <td className="px-5 py-3.5 text-sm font-mono font-medium text-gray-900 dark:text-white">{p.order}</td>
          <td className="px-5 py-3.5 text-sm text-gray-600">{p.customer}</td>
          <td className="px-5 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white">{formatCurrency(p.amount)}</td>
          <td className="px-5 py-3.5 text-sm text-gray-500">{p.method} {p.card !== '-' && <span className="text-gray-400">{p.card}</span>}</td>
          <td className="px-5 py-3.5 text-center"><Badge variant={statusVariant[p.status]}>{p.status}</Badge></td>
          <td className="px-5 py-3.5 text-sm text-gray-500">{p.gateway}</td>
          <td className="px-5 py-3.5 text-sm text-gray-400">{p.date}</td>
        </tr>)}</tbody>
      </table></div></Card>
    </div>
  )
}
