import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_SHIPPING } from '@/lib/mock-data'

export default function ShippingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Shipping</h2><p className="text-gray-500">Manage carriers and shipping rates</p></div>
        <button className="px-5 py-2.5 bg-shop-600 text-white rounded-xl text-sm font-medium">+ Add Carrier</button></div>
      <div className="space-y-3">
        {MOCK_SHIPPING.map(s => (
          <Card key={s.id} hover glow><div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-shop-50 dark:bg-shop-500/10 flex items-center justify-center text-xl">🚚</div>
              <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{s.carrier}</h3><Badge variant="success" dot>Active</Badge></div>
                <p className="text-xs text-gray-500 mt-1">{s.method}</p></div>
            </div>
            <div className="flex gap-8 text-center text-sm">
              <div><p className="font-semibold text-gray-900 dark:text-white">${s.rate}</p><p className="text-xs text-gray-400">Rate</p></div>
              <div><p className="font-semibold text-gray-900 dark:text-white">{s.avgDelivery}</p><p className="text-xs text-gray-400">Avg Delivery</p></div>
              <div><p className="font-semibold text-emerald-600">{s.onTime}%</p><p className="text-xs text-gray-400">On-Time</p></div>
              <div><p className="font-semibold text-gray-900 dark:text-white">{s.zones} zones</p><p className="text-xs text-gray-400">Coverage</p></div>
            </div>
          </div></Card>
        ))}
      </div>
    </div>
  )
}
