import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_TAXES } from '@/lib/mock-data'

export default function TaxesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Tax Management</h2><p className="text-gray-500">Tax rates and configuration</p></div>
        <button className="px-5 py-2.5 bg-shop-600 text-white rounded-xl text-sm font-medium">+ Add Tax Rule</button></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Tax Rules</p><p className="text-2xl font-bold text-shop-600 mt-1">{MOCK_TAXES.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Auto-Calculated</p><p className="text-2xl font-bold text-emerald-600 mt-1">{MOCK_TAXES.filter(t => t.auto).length}</p></Card>
        <Card><p className="text-sm text-gray-500">Regions Covered</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{MOCK_TAXES.length}</p></Card>
        <Card><p className="text-sm text-gray-500">Tax Collected (Sep)</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">$12,400</p></Card>
      </div>
      <Card padding={false}><div className="overflow-x-auto"><table className="w-full">
        <thead><tr className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/50">
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Region</th>
          <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Type</th>
          <th className="text-right px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Rate</th>
          <th className="text-center px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Auto</th>
        </tr></thead>
        <tbody>{MOCK_TAXES.map(t => <tr key={t.id} className="border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
          <td className="px-5 py-3.5 text-sm font-medium text-gray-900 dark:text-white">{t.region}</td>
          <td className="px-5 py-3.5"><Badge variant="shop">{t.type}</Badge></td>
          <td className="px-5 py-3.5 text-right text-sm font-semibold text-gray-900 dark:text-white">{t.rate}%</td>
          <td className="px-5 py-3.5 text-center">{t.auto ? '✅' : '❌'}</td>
        </tr>)}</tbody>
      </table></div></Card>
    </div>
  )
}
