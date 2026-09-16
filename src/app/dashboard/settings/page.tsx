'use client'
import Card, { CardTitle, CardDescription } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="space-y-6 max-w-3xl">
      <div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2><p className="text-gray-500">Manage your store settings</p></div>
      <Card><CardTitle>Store Information</CardTitle><CardDescription>Basic store details</CardDescription>
        <div className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Store Name</label><input defaultValue="MarketForge Store" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-shop-500 outline-none" /></div>
            <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label><input defaultValue="khalid@marketforge.io" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:ring-2 focus:ring-shop-500 outline-none" /></div>
          </div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label><select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm"><option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option></select></div>
          <div className="flex justify-end"><Button>Save Changes</Button></div>
        </div></Card>
      <Card><CardTitle>Appearance</CardTitle>
        <div className="grid grid-cols-3 gap-3 mt-4">
          {(['light', 'dark', 'system'] as const).map(t => <button key={t} onClick={() => setTheme(t)} className={cn('p-4 rounded-xl border-2 text-center transition-all', theme === t ? 'border-shop-500 bg-shop-50 dark:bg-shop-500/10' : 'border-gray-200 dark:border-gray-700')}>
            <span className="text-2xl">{t === 'light' ? '☀️' : t === 'dark' ? '🌙' : '💻'}</span><p className="text-sm font-medium text-gray-900 dark:text-white mt-2 capitalize">{t}</p>
          </button>)}
        </div></Card>
      <Card><CardTitle>Payments</CardTitle><CardDescription>Payment gateway configuration</CardDescription>
        <div className="space-y-3 mt-4">
          {[{ name: 'Stripe', status: 'connected', icon: '💳' }, { name: 'PayPal', status: 'connected', icon: '🅿️' }, { name: 'Apple Pay', status: 'connected', icon: '🍎' }].map(p => (
            <div key={p.name} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="flex items-center gap-3"><span className="text-xl">{p.icon}</span><span className="text-sm font-medium text-gray-900 dark:text-white">{p.name}</span></div>
              <Badge variant="success" dot>{p.status}</Badge>
            </div>
          ))}
        </div></Card>
      <Card className="border-red-200 dark:border-red-500/30"><div className="flex items-center justify-between">
        <div><p className="text-sm font-medium text-red-600">Delete Store</p><p className="text-xs text-gray-500">Permanently delete all data</p></div>
        <Button variant="danger" size="sm">Delete</Button>
      </div></Card>
    </div>
  )
}
