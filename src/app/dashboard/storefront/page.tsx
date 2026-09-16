import Card, { CardTitle, CardDescription } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_STOREFRONT } from '@/lib/mock-data'
import { formatNumber } from '@/lib/utils'

export default function StorefrontPage() {
  const sf = MOCK_STOREFRONT
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Storefront</h2><p className="text-gray-500">Your online store configuration</p></div>
      <Card className="bg-gradient-to-br from-shop-500 via-fuchsia-600 to-purple-600 text-white border-0">
        <div className="flex items-center justify-between">
          <div><Badge className="bg-white/20 text-white">Store</Badge><h3 className="text-2xl font-bold mt-2">MarketForge Store</h3><p className="text-white/70 mt-1">Theme: {sf.theme} · {sf.products} products · {sf.collections} collections</p></div>
          <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl text-sm font-medium transition-colors">Customize →</button>
        </div>
      </Card>
      <div className="grid grid-cols-4 gap-4">
        {[{ l: 'Visitors', v: formatNumber(sf.traffic.visitors) }, { l: 'Page Views', v: formatNumber(sf.traffic.pageViews) }, { l: 'Bounce Rate', v: sf.traffic.bounceRate + '%' }, { l: 'Avg Session', v: sf.traffic.avgSession }].map(m => (
          <Card key={m.l}><p className="text-sm text-gray-500">{m.l}</p><p className="text-xl font-bold text-gray-900 dark:text-white mt-1">{m.v}</p></Card>
        ))}
      </div>
      <Card><CardTitle className="mb-3">Conversion Funnel</CardTitle>
        <div className="space-y-3">
          {[{ stage: 'Visitors', count: sf.conversion.visitors, pct: 100 }, { stage: 'Added to Cart', count: sf.conversion.addedToCart, pct: (sf.conversion.addedToCart / sf.conversion.visitors * 100) }, { stage: 'Checkout', count: sf.conversion.checkout, pct: (sf.conversion.checkout / sf.conversion.visitors * 100) }, { stage: 'Orders', count: sf.conversion.orders, pct: sf.conversion.rate }].map(f => (
            <div key={f.stage} className="flex items-center gap-4">
              <span className="text-sm text-gray-600 dark:text-gray-400 w-32">{f.stage}</span>
              <div className="flex-1 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"><div className="h-full bg-gradient-to-r from-shop-500 to-fuchsia-500 rounded-lg flex items-center px-3" style={{ width: `${Math.max(f.pct, 5)}%` }}><span className="text-xs text-white font-medium">{f.count.toLocaleString()}</span></div></div>
              <span className="text-sm font-medium text-gray-900 dark:text-white w-16 text-right">{f.pct.toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
