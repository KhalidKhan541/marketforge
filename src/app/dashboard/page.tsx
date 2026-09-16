'use client'
import Card, { CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import MetricCard from '@/components/ui/MetricCard'
import Badge from '@/components/ui/Badge'
import { MOCK_USER, MOCK_REVENUE, MOCK_ACTIVITY, MOCK_ORDERS, MOCK_CUSTOMERS } from '@/lib/mock-data'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function DashboardPage() {
  const todayRevenue = 3247.80
  const todayOrders = MOCK_ORDERS.filter(o => o.date === '2026-09-15').length
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Store Overview</h2><p className="text-gray-500 dark:text-gray-400">Welcome back, Khalid. Here is what is happening today.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Revenue (Today)" value={todayRevenue} format="currency" change="+12.3% vs yesterday" positive icon="💰" />
        <MetricCard label="Orders (Today)" value={todayOrders} change="+8 vs yesterday" positive icon="🛒" />
        <MetricCard label="Total Customers" value={MOCK_USER.conversionRate} change="+2.1% this week" positive icon="👥" format="number" />
        <MetricCard label="Conversion Rate" value={`${MOCK_USER.conversionRate}%`} change="+0.3% vs last month" positive icon="📈" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader><div><CardTitle>Revenue Trend</CardTitle><CardDescription>Monthly revenue for 2026</CardDescription></div></CardHeader>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={MOCK_REVENUE}>
              <defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#d946ef" stopOpacity={0.3} /><stop offset="95%" stopColor="#d946ef" stopOpacity={0} /></linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={v => `$${v/1000}k`} />
              <Tooltip contentStyle={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px' }} formatter={(v: number) => [formatCurrency(v), 'Revenue']} />
              <Area type="monotone" dataKey="revenue" stroke="#d946ef" fillOpacity={1} fill="url(#rg)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
        <Card>
          <CardTitle className="mb-4">Quick Stats</CardTitle>
          <div className="space-y-4">
            {[{ l: 'Avg Order Value', v: formatCurrency(81.67) }, { l: 'Return Rate', v: '2.6%' }, { l: 'Repeat Customers', v: '42%' }, { l: 'Stock Items', v: formatNumber(MOCK_USER.revenue) }].map(s => (
              <div key={s.l} className="flex items-center justify-between"><span className="text-sm text-gray-500">{s.l}</span><span className="text-sm font-semibold text-gray-900 dark:text-white">{s.v}</span></div>
            ))}
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle>Recent Activity</CardTitle></CardHeader>
          <div className="space-y-2">
            {MOCK_ACTIVITY.slice(0, 7).map(a => (
              <div key={a.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-shop-50 dark:bg-shop-500/10 flex items-center justify-center text-sm">
                  {a.type === 'order' ? '🛒' : a.type === 'review' ? '⭐' : a.type === 'shipping' ? '🚚' : a.type === 'product' ? '📦' : a.type === 'campaign' ? '📢' : a.type === 'alert' ? '⚠️' : a.type === 'payment' ? '💳' : '📋'}
                </div>
                <div className="flex-1 min-w-0"><p className="text-sm text-gray-700 dark:text-gray-300 truncate">{a.action}</p><p className="text-xs text-gray-400">{a.user} · {a.time}</p></div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader><CardTitle>Recent Orders</CardTitle><a href="/dashboard/orders" className="text-sm text-shop-600 hover:text-shop-500 font-medium">View All →</a></CardHeader>
          <div className="space-y-2">
            {MOCK_ORDERS.slice(0, 6).map(o => (
              <div key={o.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div><p className="text-sm font-medium text-gray-900 dark:text-white">{o.id}</p><p className="text-xs text-gray-500">{o.customer}</p></div>
                <div className="text-right"><p className="text-sm font-semibold text-gray-900 dark:text-white">{formatCurrency(o.total)}</p><Badge variant={o.status === 'Delivered' ? 'success' : o.status === 'Shipped' ? 'shop' : o.status === 'Cancelled' ? 'danger' : 'warning'}>{o.status}</Badge></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
