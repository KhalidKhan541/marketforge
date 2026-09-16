import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { PLANES, MOCK_BILLING } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

const plans = [
  { name: 'Starter', price: 29, features: ['100 products', '1K orders/mo', '2 staff', 'Basic analytics', 'Email support'] },
  { name: 'Growth', price: 79, features: ['1K products', '10K orders/mo', '5 staff', 'Advanced analytics', 'Coupons', 'Priority support'], popular: true },
  { name: 'Scale', price: 199, features: ['10K products', '100K orders/mo', '20 staff', 'Custom reports', 'API access', 'Dedicated support'] },
  { name: 'Enterprise', price: 499, features: ['Unlimited', 'Unlimited', 'Unlimited', 'Custom integrations', 'White-label', 'SLA'] },
]

export default function BillingPage() {
  const u = MOCK_BILLING.usage
  return (
    <div className="space-y-6">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Billing</h2><p className="text-gray-500">Manage subscription and payments</p></div>
      <Card className="bg-gradient-to-br from-shop-500 via-fuchsia-600 to-purple-600 text-white border-0">
        <div className="flex items-center justify-between"><div><Badge className="bg-white/20 text-white">Current Plan</Badge><h3 className="text-3xl font-bold mt-3">Scale</h3><p className="text-white/70 mt-1">Next renewal: Oct 1, 2026</p></div>
          <div className="text-right"><p className="text-4xl font-bold">$199<span className="text-base font-normal text-white/60">/mo</span></p><Button variant="outline" className="mt-3 border-white/30 text-white hover:bg-white/10">Manage</Button></div></div>
      </Card>
      <Card><CardTitle className="mb-3">Current Usage</CardTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[{ l: 'Products', v: u.products.toString(), m: '250' }, { l: 'Orders', v: u.orders.toLocaleString(), m: '100K' }, { l: 'Storage', v: `${u.storage} GB`, m: '50 GB' }, { l: 'Bandwidth', v: `${u.bandwidth} GB`, m: '500 GB' }, { l: 'Emails', v: u.email.toLocaleString(), m: '200K' }, { l: 'SMS', v: u.sms.toLocaleString(), m: '5K' }].map(item => (
            <div key={item.l} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl"><p className="text-xs text-gray-500">{item.l}</p><p className="text-lg font-bold text-gray-900 dark:text-white mt-1">{item.v}</p><p className="text-[10px] text-gray-400">of {item.m}</p></div>
          ))}
        </div>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {plans.map(p => <Card key={p.name} className={p.popular ? 'ring-2 ring-shop-500' : ''}>
          {p.popular && <div className="text-center mb-2"><Badge variant="shop">Current</Badge></div>}
          <h3 className="text-base font-bold text-gray-900 dark:text-white">{p.name}</h3>
          <p className="text-2xl font-bold mt-2">${p.price}<span className="text-sm text-gray-500">/mo</span></p>
          <ul className="mt-4 space-y-2">{p.features.map(f => <li key={f} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"><span className="text-emerald-500">✓</span>{f}</li>)}</ul>
          <Button variant={p.popular ? 'primary' : 'outline'} className="w-full mt-5" size="sm" disabled={p.popular}>{p.popular ? 'Current' : 'Upgrade'}</Button>
        </Card>)}
      </div>
      <Card><CardTitle className="mb-3">Invoices</CardTitle><div className="space-y-2">
        {MOCK_BILLING.invoices.map(inv => <div key={inv.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50">
          <div className="flex items-center gap-4"><span className="text-sm font-mono font-medium text-gray-900 dark:text-white">{inv.id}</span><span className="text-sm text-gray-500">{inv.date}</span></div>
          <div className="flex items-center gap-4"><Badge variant="success">{inv.status}</Badge><span className="text-sm font-semibold">{formatCurrency(inv.amount)}</span></div>
        </div>)}</div></Card>
    </div>
  )
}
