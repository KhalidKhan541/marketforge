'use client'
import { useState } from 'react'
import Card, { CardTitle } from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { MOCK_PRODUCTS } from '@/lib/mock-data'
import { formatCurrency } from '@/lib/utils'

export default function POSPage() {
  const [cart, setCart] = useState<Array<{ product: typeof MOCK_PRODUCTS[0]; qty: number }>>([])
  const addToCart = (p: typeof MOCK_PRODUCTS[0]) => { const existing = cart.find(c => c.product.id === p.id); if (existing) { setCart(cart.map(c => c.product.id === p.id ? { ...c, qty: c.qty + 1 } : c)) } else { setCart([...cart, { product: p, qty: 1 }]) } }
  const total = cart.reduce((s, c) => s + c.product.price * c.qty, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h2 className="text-2xl font-bold text-gray-900 dark:text-white">Point of Sale</h2><p className="text-gray-500">In-store checkout</p></div><Badge variant="shop">Terminal Active</Badge></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card><CardTitle className="mb-3">Products</CardTitle>
            <div className="grid grid-cols-3 gap-3">{MOCK_PRODUCTS.slice(0, 9).map(p => (
              <button key={p.id} onClick={() => addToCart(p)} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl text-left hover:bg-shop-50 dark:hover:bg-shop-500/10 hover:ring-2 hover:ring-shop-500 transition-all">
                <span className="text-2xl">{p.image}</span><p className="text-sm font-medium text-gray-900 dark:text-white mt-2 truncate">{p.name}</p><p className="text-xs text-shop-600 font-semibold">{formatCurrency(p.price)}</p>
              </button>
            ))}</div>
          </Card>
        </div>
        <Card className="flex flex-col"><CardTitle className="mb-3">Current Order</CardTitle>
          {cart.length === 0 ? <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">No items in cart</div> : (
            <div className="space-y-2 flex-1">{cart.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-2"><span>{c.product.image}</span><div><p className="text-sm font-medium">{c.product.name}</p><p className="text-xs text-gray-400">x{c.qty}</p></div></div>
                <span className="text-sm font-semibold">{formatCurrency(c.product.price * c.qty)}</span>
              </div>
            ))}</div>
          )}
          <div className="border-t border-gray-100 dark:border-gray-800 pt-3 mt-3">
            <div className="flex items-center justify-between text-lg font-bold"><span>Total</span><span>{formatCurrency(total)}</span></div>
            <Button className="w-full mt-3" size="lg" disabled={cart.length === 0}>💳 Pay Now</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
