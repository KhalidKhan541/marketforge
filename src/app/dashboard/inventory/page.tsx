import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import UsageBar from '@/components/ui/UsageBar'
import { MOCK_PRODUCTS, MOCK_WAREHOUSES } from '@/lib/mock-data'

export default function InventoryPage() {
  const totalStock = MOCK_PRODUCTS.reduce((s, p) => s + p.stock, 0)
  const lowStock = MOCK_PRODUCTS.filter(p => p.stock < 500).length
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Inventory</h2><p className="text-gray-500">Stock levels across all warehouses</p></div></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Total Stock</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{totalStock.toLocaleString()}</p></Card>
        <Card><p className="text-sm text-gray-500">Products</p><p className="text-2xl font-bold text-shop-600 mt-1">{MOCK_PRODUCTS.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Low Stock Items</p><p className="text-2xl font-bold text-amber-600 mt-1">{lowStock}</p></Card>
        <Card><p className="text-sm text-gray-500">Warehouses</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{MOCK_WAREHOUSES.length}</p></Card>
      </div>
      <Card padding={false}>
        <div className="overflow-x-auto"><table className="w-full">
          <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
            <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Product</th>
            <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Stock</th>
            <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Sales</th>
            <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
          </tr></thead>
          <tbody>{MOCK_PRODUCTS.map(p => <tr key={p.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
            <td className="px-5 py-3.5 flex items-center gap-3"><span>{p.image}</span><span className="text-sm font-medium text-gray-900 dark:text-white">{p.name}</span></td>
            <td className="px-5 py-3.5 text-right text-sm font-medium">{p.stock.toLocaleString()}</td>
            <td className="px-5 py-3.5 text-right text-sm text-gray-600">{p.sales.toLocaleString()}</td>
            <td className="px-5 py-3.5 text-center"><Badge variant={p.stock < 500 ? 'warning' : 'success'}>{p.stock < 500 ? 'Low Stock' : 'In Stock'}</Badge></td>
          </tr>)}</tbody>
        </table></div>
      </Card>
    </div>
  )
}
