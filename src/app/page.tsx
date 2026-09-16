import Link from 'next/link'
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2"><div className="w-9 h-9 rounded-lg bg-gradient-to-br from-shop-500 to-fuchsia-500 flex items-center justify-center text-white text-sm font-bold">M</div><span className="text-xl font-bold text-gray-900">MarketForge</span></div>
        <div className="flex items-center gap-4"><Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900 font-medium">Demo</Link><Link href="/dashboard" className="px-5 py-2.5 bg-shop-600 text-white rounded-xl text-sm font-medium">Get Started →</Link></div>
      </nav>
      <section className="text-center px-6 pt-24 pb-28 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Sell anything,<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-shop-600 to-fuchsia-500">everywhere</span></h1>
        <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto">Complete e-commerce platform with products, orders, marketing, payments, shipping, POS, and real-time analytics.</p>
        <div className="flex items-center justify-center gap-4 mt-10"><Link href="/dashboard" className="px-8 py-3.5 bg-gradient-to-r from-shop-500 to-fuchsia-500 text-white rounded-xl font-semibold shadow-lg">Start Free Trial →</Link><Link href="#pricing" className="px-8 py-3.5 border border-gray-200 rounded-xl font-semibold text-gray-700">View Pricing</Link></div>
      </section>
      <section className="px-6 py-20 bg-gray-50"><div className="max-w-6xl mx-auto text-center"><h2 className="text-3xl font-bold text-gray-900">Everything you need to sell online</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[{ i: '📦', t: 'Products' }, { i: '🛒', t: 'Orders' }, { i: '👥', t: 'Customers' }, { i: '📢', t: 'Marketing' }, { i: '💳', t: 'Payments' }, { i: '🚚', t: 'Shipping' }, { i: '📊', t: 'Analytics' }, { i: '📱', t: 'POS' }].map(f => (
            <div key={f.t} className="p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center"><span className="text-3xl">{f.i}</span><h3 className="text-sm font-semibold text-gray-900 mt-3">{f.t}</h3></div>
          ))}</div></div>
      </section>
      <section className="px-6 py-24" id="pricing"><div className="max-w-5xl mx-auto text-center"><h2 className="text-3xl font-bold text-gray-900">Simple pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          {[{ n: 'Starter', p: 29, f: ['100 products', '1K orders/mo', '2 staff'] }, { n: 'Growth', p: 79, f: ['1K products', '10K orders/mo', '5 staff'], pop: true }, { n: 'Scale', p: 199, f: ['10K products', '100K orders/mo', '20 staff'] }, { n: 'Enterprise', p: 499, f: ['Unlimited everything'] }].map(p => (
            <div key={p.n} className={`p-6 rounded-2xl border text-left ${p.pop ? 'border-shop-500 shadow-lg' : 'border-gray-200'} relative`}>
              {p.pop && <div className="absolute -top-3 left-6 px-3 py-0.5 bg-shop-600 text-white text-xs font-semibold rounded-full">Popular</div>}
              <h3 className="text-base font-bold text-gray-900">{p.n}</h3>
              <p className="text-3xl font-bold mt-2">${p.p}<span className="text-sm text-gray-400">/mo</span></p>
              <ul className="mt-4 space-y-2">{p.f.map(f => <li key={f} className="flex items-center gap-2 text-xs text-gray-600"><span className="text-emerald-500">✓</span>{f}</li>)}</ul>
              <Link href="/dashboard" className={`block mt-5 text-center py-2.5 rounded-xl text-sm font-medium ${p.pop ? 'bg-shop-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Get Started</Link>
            </div>
          ))}</div></div>
      </section>
      <footer className="border-t border-gray-100 px-6 py-8 text-center text-sm text-gray-400"><p>© 2026 MarketForge. Built by <a href="https://github.com/KhalidKhan541" className="text-shop-600">KhalidKhan541</a></p></footer>
    </div>
  )
}
