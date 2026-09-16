'use client'
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { MOCK_REVENUE, MOCK_SEO, MOCK_RETURN_RATES, MOCK_CUSTOMERS } from '@/lib/mock-data'
import { formatCurrency, formatNumber, cn } from '@/lib/utils'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const trafficSources = [
  { name: 'Organic', value: 42000, color: '#d946ef' }, { name: 'Direct', value: 28000, color: '#8b5cf6' },
  { name: 'Social', value: 18000, color: '#3b82f6' }, { name: 'Referral', value: 12000, color: '#22c55e' },
  { name: 'Email', value: 9000, color: '#f59e0b' },
]
const statusDist = [
  { name: 'Delivered', value: 68, color: '#22c55e' }, { name: 'Shipped', value: 15, color: '#3b82f6' },
  { name: 'Processing', value: 8, color: '#f59e0b' }, { name: 'Cancelled', value: 5, color: '#ef4444' },
  { name: 'Returned', value: 4, color: '#f97316' },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h2><p className="text-gray-500">Store performance overview</p></div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[{ l: 'Total Revenue', v: '$768K', c: '+18.2%', i: '💰' }, { l: 'Total Orders', v: '8,430', c: '+15.4%', i: '🛒' }, { l: 'Customers', v: formatNumber(MOCK_CUSTOMERS.length * 1115), c: '+22.1%', i: '👥' }, { l: 'AOV', v: '$81.67', c: '+4.2%', i: '📊' }].map(m => (
          <Card key={m.l}><p className="text-sm text-gray-500">{m.l}</p><p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{m.v}</p><p className="text-xs font-semibold mt-1 text-emerald-600">{m.c}</p></Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader><div><CardTitle>Revenue & Orders</CardTitle><CardDescription>Monthly trends for 2026</CardDescription></div></CardHeader>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={MOCK_REVENUE}>
              <defs><linearGradient id="rg2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#d946ef" stopOpacity={0.3} /><stop offset="95%" stopColor="#d946ef" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={v => `$${v/1000}k`} />
              <Tooltip contentStyle={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }} />
              <Area type="monotone" dataKey="revenue" stroke="#d946ef" fillOpacity={1} fill="url(#rg2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <CardTitle className="mb-4">Traffic Sources</CardTitle>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart><Pie data={trafficSources} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4} dataKey="value">
              {trafficSources.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip /></PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">{trafficSources.map(s => <div key={s.name} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} /><span className="text-gray-600 dark:text-gray-400">{s.name}</span></span>
            <span className="font-medium text-gray-900 dark:text-white">{formatNumber(s.value)}</span></div>)}</div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardTitle className="mb-4">Order Status Distribution</CardTitle>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart><Pie data={statusDist} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
              {statusDist.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip /></PieChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <CardTitle className="mb-4">SEO Performance</CardTitle>
          <div className="space-y-3">
            {[{ l: 'SEO Score', v: `${MOCK_SEO.score}/100`, c: 'text-emerald-600' }, { l: 'Organic Traffic', v: formatNumber(MOCK_SEO.organicTraffic) }, { l: 'Keywords', v: formatNumber(MOCK_SEO.keywords) }, { l: 'Backlinks', v: formatNumber(MOCK_SEO.backlinks) }, { l: 'Avg Position', v: MOCK_SEO.avgPosition.toString() }].map(s => (
              <div key={s.l} className="flex items-center justify-between"><span className="text-sm text-gray-500">{s.l}</span><span className={cn('text-sm font-semibold', s.c || 'text-gray-900 dark:text-white')}>{s.v}</span></div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
