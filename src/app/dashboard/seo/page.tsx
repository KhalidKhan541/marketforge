import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_SEO } from '@/lib/mock-data'
import { formatNumber } from '@/lib/utils'

export default function SEOPage() {
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">SEO Manager</h2><p className="text-gray-500">Search engine optimization insights</p></div>
      <div className="grid grid-cols-5 gap-4">
        {[{ l: 'SEO Score', v: `${MOCK_SEO.score}/100`, c: 'text-emerald-600' }, { l: 'Organic Traffic', v: formatNumber(MOCK_SEO.organicTraffic) }, { l: 'Keywords', v: formatNumber(MOCK_SEO.keywords) }, { l: 'Backlinks', v: formatNumber(MOCK_SEO.backlinks) }, { l: 'Avg Position', v: MOCK_SEO.avgPosition.toString() }].map(m => (
          <Card key={m.l}><p className="text-sm text-gray-500">{m.l}</p><p className={`text-2xl font-bold mt-1 ${m.c || 'text-gray-900 dark:text-white'}`}>{m.v}</p></Card>
        ))}
      </div>
      <Card><CardTitle className="mb-3">Top Pages by Traffic</CardTitle>
        <div className="space-y-3">{MOCK_SEO.pages.map(p => (
          <div key={p.url} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
            <div><p className="text-sm font-medium text-gray-900 dark:text-white font-mono">{p.url}</p></div>
            <div className="flex gap-6 text-center text-sm">
              <div><p className="font-semibold text-emerald-600">{p.score}/100</p><p className="text-xs text-gray-400">Score</p></div>
              <div><p className="font-semibold text-gray-900 dark:text-white">{formatNumber(p.traffic)}</p><p className="text-xs text-gray-400">Traffic</p></div>
              <div><p className="font-semibold text-gray-900 dark:text-white">{p.keywords}</p><p className="text-xs text-gray-400">Keywords</p></div>
            </div>
          </div>
        ))}</div>
      </Card>
    </div>
  )
}
