import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'

const tiers = [
  { name: 'Bronze', pointsReq: 0, members: 4200, perks: ['1x points', 'Free shipping > $100'], color: 'from-amber-600 to-orange-600' },
  { name: 'Silver', pointsReq: 1000, members: 2800, perks: ['1.5x points', 'Free shipping', '5% discount'], color: 'from-gray-400 to-gray-500' },
  { name: 'Gold', pointsReq: 5000, members: 1200, perks: ['2x points', 'Free shipping', '10% discount', 'Early access'], color: 'from-yellow-500 to-amber-500' },
  { name: 'Platinum', pointsReq: 15000, members: 420, perks: ['3x points', 'Free express shipping', '15% discount', 'VIP support', 'Exclusive products'], color: 'from-shop-500 to-fuchsia-500' },
]

export default function LoyaltyPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Loyalty Program</h2><p className="text-gray-500">Manage rewards and customer tiers</p></div>
      <div className="grid grid-cols-4 gap-4">
        <Card><p className="text-sm text-gray-500">Total Members</p><p className="text-2xl font-bold text-shop-600 mt-1">8,620</p></Card>
        <Card><p className="text-sm text-gray-500">Points Issued</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">2.4M</p></Card>
        <Card><p className="text-sm text-gray-500">Redemption Rate</p><p className="text-2xl font-bold text-emerald-600 mt-1">68%</p></Card>
        <Card><p className="text-sm text-gray-500">Avg Points/Member</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">278</p></Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {tiers.map(t => (
          <Card key={t.name} hover><div className={`h-2 -mt-6 -mx-6 mb-4 rounded-t-2xl bg-gradient-to-r ${t.color}`} />
            <h3 className="text-base font-bold text-gray-900 dark:text-white">{t.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{t.pointsReq > 0 ? `${t.pointsReq.toLocaleString()}+ points` : 'All members'}</p>
            <p className="text-sm font-semibold text-shop-600 mt-2">{t.members.toLocaleString()} members</p>
            <ul className="mt-3 space-y-1">{t.perks.map(p => <li key={p} className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400"><span className="text-emerald-500">✓</span>{p}</li>)}</ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
