import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const segments = [
  { name: 'VIP Customers', count: 3, criteria: 'Total spent > $4,000', color: 'from-shop-500 to-fuchsia-500', revenue: 19620, conversion: 8.2 },
  { name: 'High Value', count: 5, criteria: 'Total spent > $2,000', color: 'from-blue-500 to-cyan-500', revenue: 28900, conversion: 5.6 },
  { name: 'At Risk', count: 4, criteria: 'No order in 60+ days', color: 'from-amber-500 to-orange-500', revenue: 3400, conversion: 1.2 },
  { name: 'New Customers', count: 12, criteria: 'Joined < 30 days ago', color: 'from-emerald-500 to-teal-500', revenue: 1800, conversion: 2.1 },
  { name: 'Repeat Buyers', count: 8, criteria: '3+ orders in 90 days', color: 'from-violet-500 to-purple-500', revenue: 15400, conversion: 7.4 },
]

export default function SegmentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Customer Segments</h2><p className="text-gray-500">{segments.length} segments</p></div>
        <button className="px-5 py-2.5 bg-shop-600 text-white rounded-xl text-sm font-medium">+ Create Segment</button></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {segments.map(s => (
          <Card key={s.name} hover><div className="h-2 -mt-6 -mx-6 mb-4 rounded-t-2xl bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}><div className={`h-2 rounded-t-2xl bg-gradient-to-r ${s.color}`} /></div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">{s.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{s.criteria}</p>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-3 border-t border-gray-50 dark:border-gray-800/50 text-center">
              <div><p className="text-lg font-bold text-gray-900 dark:text-white">{s.count}</p><p className="text-xs text-gray-400">Customers</p></div>
              <div><p className="text-lg font-bold text-shop-600">${(s.revenue / 1000).toFixed(1)}K</p><p className="text-xs text-gray-400">Revenue</p></div>
              <div><p className="text-lg font-bold text-emerald-600">{s.conversion}%</p><p className="text-xs text-gray-400">Conv.</p></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
