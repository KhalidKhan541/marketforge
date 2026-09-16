import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Avatar from '@/components/ui/Avatar'
import { MOCK_REVIEWS } from '@/lib/mock-data'

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Reviews</h2><p className="text-gray-500">{MOCK_REVIEWS.length} product reviews</p></div>
      <div className="space-y-4">
        {MOCK_REVIEWS.map(r => (
          <Card key={r.id}>
            <div className="flex items-start gap-4">
              <Avatar name={r.customer} />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{r.title}</h3>
                  <span className="text-amber-500">{'⭐'.repeat(r.rating)}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{r.content}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                  <span>{r.customer}</span><span>{r.product}</span><span>{r.date}</span><span>{r.helpful} found helpful</span>
                </div>
              </div>
              <Badge variant="success" dot>Approved</Badge>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
