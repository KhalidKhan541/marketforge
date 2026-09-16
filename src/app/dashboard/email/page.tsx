import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

const templates = [
  { name: 'Welcome Series', subject: 'Welcome to MarketForge! 🎉', status: 'active', sent: 4200, openRate: 68, clickRate: 24 },
  { name: 'Abandoned Cart', subject: 'You left something in your cart...', status: 'active', sent: 12400, openRate: 42, clickRate: 18 },
  { name: 'Order Confirmation', subject: 'Your order is confirmed! ✅', status: 'active', sent: 12847, openRate: 92, clickRate: 35 },
  { name: 'Post-Purchase', subject: 'Thanks for your order! How did we do?', status: 'active', sent: 8900, openRate: 55, clickRate: 12 },
  { name: 'Win-back', subject: 'We miss you, {{name}}!', status: 'draft', sent: 0, openRate: 0, clickRate: 0 },
]

export default function EmailPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Email Templates</h2><p className="text-gray-500">{templates.length} templates</p></div>
        <Button>+ Create Template</Button></div>
      <div className="space-y-3">
        {templates.map(t => (
          <Card key={t.name} hover><div className="flex items-center justify-between">
            <div className="flex items-center gap-4"><span className="text-2xl">📧</span>
              <div><div className="flex items-center gap-2"><h3 className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</h3><Badge variant={t.status === 'active' ? 'success' : 'default'} dot>{t.status}</Badge></div>
                <p className="text-xs text-gray-500 mt-1">{t.subject}</p></div></div>
            <div className="flex gap-6 text-center text-sm">
              <div><p className="font-semibold text-gray-900 dark:text-white">{t.sent > 0 ? t.sent.toLocaleString() : '-'}</p><p className="text-xs text-gray-400">Sent</p></div>
              <div><p className="font-semibold text-forge-600">{t.openRate > 0 ? `${t.openRate}%` : '-'}</p><p className="text-xs text-gray-400">Open Rate</p></div>
              <div><p className="font-semibold text-emerald-600">{t.clickRate > 0 ? `${t.clickRate}%` : '-'}</p><p className="text-xs text-gray-400">Click Rate</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
