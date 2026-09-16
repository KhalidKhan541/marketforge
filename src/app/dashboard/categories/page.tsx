import Card from '@/components/ui/Card'
import { MOCK_PRODUCTS } from '@/lib/mock-data'

const categories = [...new Set(MOCK_PRODUCTS.map(p => p.category))].map(c => ({
  name: c, count: MOCK_PRODUCTS.filter(p => p.category === c).length, revenue: MOCK_PRODUCTS.filter(p => p.category === c).reduce((s, p) => s + p.price * p.sales, 0)
}))

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Categories</h2><p className="text-gray-500">{categories.length} categories</p></div>
        <button className="px-5 py-2.5 bg-shop-600 text-white rounded-xl text-sm font-medium">+ Add Category</button></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {categories.map(c => (
          <Card key={c.name} hover><h3 className="text-base font-semibold text-gray-900 dark:text-white">{c.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{c.count} products</p>
            <p className="text-lg font-bold text-shop-600 mt-3">${(c.revenue / 1000).toFixed(0)}K revenue</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
