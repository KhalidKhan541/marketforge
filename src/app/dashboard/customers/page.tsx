import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'
import { MOCK_CUSTOMERS } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Customers</h2><p className="text-gray-500">{MOCK_CUSTOMERS.length} customers</p></div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {MOCK_CUSTOMERS.map(c => (
          <Card key={c.id} hover><div className="flex items-start gap-4">
            <Avatar name={c.name} size="lg" />
            <div className="flex-1 min-w-0"><div className="flex items-center gap-2"><h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">{c.name}</h3><Badge variant={c.status === 'VIP' ? 'shop' : 'success'}>{c.status}</Badge></div>
              <p className="text-sm text-gray-500">{c.email}</p><p className="text-xs text-gray-400 mt-0.5">{c.city}, {c.country}</p></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50 text-center">
            <div><p className="text-lg font-bold text-gray-900 dark:text-white">{c.orders}</p><p className="text-xs text-gray-400">Orders</p></div>
            <div><p className="text-lg font-bold text-shop-600">{formatCurrency(c.totalSpent)}</p><p className="text-xs text-gray-400">Spent</p></div>
            <div><p className="text-lg font-bold text-gray-900 dark:text-white">{c.lastOrder.slice(5)}</p><p className="text-xs text-gray-400">Last Order</p></div>
          </div></Card>
        ))}
      </div>
    </div>
  )
}
