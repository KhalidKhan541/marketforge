import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MOCK_COUPONS } from '@/lib/mock-data'

export default function CouponsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Coupons</h2><p className="text-gray-500">{MOCK_COUPONS.length} coupon codes</p></div>
        <Button>+ Create Coupon</Button></div>
      <div className="space-y-3">
        {MOCK_COUPONS.map(c => (
          <Card key={c.id}><div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-shop-50 dark:bg-shop-500/10 flex items-center justify-center text-xl">🎫</div>
              <div><div className="flex items-center gap-2"><code className="text-sm font-mono font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">{c.code}</code><Badge variant={c.status === 'Active' ? 'success' : 'default'} dot>{c.status}</Badge></div>
                <p className="text-xs text-gray-500 mt-1">{c.type === 'Percentage' ? `${c.value}% off` : c.type === 'Fixed' ? `$${c.value} off` : 'Free shipping'}{c.minOrder > 0 ? ` on orders $${c.minOrder}+` : ''}</p></div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="text-center"><p className="font-semibold text-gray-900 dark:text-white">{c.used.toLocaleString()}</p><p className="text-xs text-gray-400">Used</p></div>
              <div className="text-center"><p className="text-gray-500">{c.limit.toLocaleString()}</p><p className="text-xs text-gray-400">Limit</p></div>
              <div className="text-center"><p className="text-gray-500">{c.expires}</p><p className="text-xs text-gray-400">Expires</p></div>
              <button className="p-2 text-red-400 hover:text-red-600 rounded-lg">🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
