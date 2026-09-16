import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'

const collections = [
  { name: 'Electronics', products: 4, image: '⚡', revenue: 89400, status: 'active' },
  { name: 'Fitness & Wellness', products: 3, image: '💪', revenue: 56200, status: 'active' },
  { name: 'Kitchen & Home', products: 3, image: '🏠', revenue: 42800, status: 'active' },
  { name: 'Accessories', products: 2, image: '👜', revenue: 34500, status: 'active' },
  { name: 'Best Sellers', products: 5, image: '🔥', revenue: 128000, status: 'active' },
  { name: 'New Arrivals', products: 6, image: '✨', revenue: 0, status: 'active' },
]

export default function CollectionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Collections</h2><p className="text-gray-500">{collections.length} collections</p></div>
        <button className="px-5 py-2.5 bg-shop-600 text-white rounded-xl text-sm font-medium">+ Create Collection</button></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {collections.map(c => (
          <Card key={c.name} hover><div className="flex items-start gap-4">
            <span className="text-4xl">{c.image}</span>
            <div className="flex-1"><h3 className="text-base font-semibold text-gray-900 dark:text-white">{c.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{c.products} products</p>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-50 dark:border-gray-800/50">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{c.revenue > 0 ? `$${(c.revenue/1000).toFixed(1)}K` : 'No sales yet'}</span>
                <Badge variant="success" dot>Active</Badge>
              </div>
            </div>
          </div></Card>
        ))}
      </div>
    </div>
  )
}
