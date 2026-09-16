import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import UsageBar from '@/components/ui/UsageBar'
import { MOCK_WAREHOUSES } from '@/lib/mock-data'

export default function WarehousesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Warehouses</h2><p className="text-gray-500">{MOCK_WAREHOUSES.length} warehouses</p></div>
        <button className="px-5 py-2.5 bg-shop-600 text-white rounded-xl text-sm font-medium">+ Add Warehouse</button></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Warehouses</p><p className="text-2xl font-bold text-shop-600 mt-1">{MOCK_WAREHOUSES.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Total Capacity</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">150K units</p></Card>
        <Card><p className="text-sm text-gray-500">Avg Pick Rate</p><p className="text-2xl font-bold text-emerald-600 mt-1">{(MOCK_WAREHOUSES.reduce((s, w) => s + w.pickRate, 0) / MOCK_WAREHOUSES.length).toFixed(1)}%</p></Card>
        <Card><p className="text-sm text-gray-500">Daily Orders</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{MOCK_WAREHOUSES.reduce((s, w) => s + w.orders, 0).toLocaleString()}</p></Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {MOCK_WAREHOUSES.map(w => (
          <Card key={w.id} hover glow>
            <div className="flex items-center justify-between mb-3">
              <div><h3 className="text-base font-semibold text-gray-900 dark:text-white">{w.name}</h3><p className="text-sm text-gray-500">{w.location}</p></div>
              <Badge variant="success" dot>Active</Badge>
            </div>
            <UsageBar label="Capacity" value={w.used} max={w.capacity} unit=" units" />
            <div className="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50 text-center">
              <div><p className="text-lg font-bold text-gray-900 dark:text-white">{w.orders.toLocaleString()}</p><p className="text-xs text-gray-400">Daily Orders</p></div>
              <div><p className="text-lg font-bold text-emerald-600">{w.pickRate}%</p><p className="text-xs text-gray-400">Pick Accuracy</p></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
