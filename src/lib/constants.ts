export const APP_NAME = 'MarketForge'
export const APP_DESCRIPTION = 'Enterprise E-commerce Platform'

export const SIDEBAR_NAV = [
  { section: 'Overview', items: [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
    { name: 'Real-time', href: '/dashboard/realtime', icon: '⚡' },
  ]},
  { section: 'Catalog', items: [
    { name: 'Products', href: '/dashboard/products', icon: '📦' },
    { name: 'Collections', href: '/dashboard/collections', icon: '📁' },
    { name: 'Inventory', href: '/dashboard/inventory', icon: '📋' },
    { name: 'Categories', href: '/dashboard/categories', icon: '🏷️' },
  ]},
  { section: 'Orders', items: [
    { name: 'All Orders', href: '/dashboard/orders', icon: '🛒' },
    { name: 'Fulfillment', href: '/dashboard/fulfillment', icon: '📦' },
    { name: 'Returns', href: '/dashboard/returns', icon: '↩️' },
    { name: 'Payments', href: '/dashboard/payments', icon: '💳' },
  ]},
  { section: 'Customers', items: [
    { name: 'Customers', href: '/dashboard/customers', icon: '👥' },
    { name: 'Segments', href: '/dashboard/segments', icon: '🎯' },
    { name: 'Reviews', href: '/dashboard/reviews', icon: '⭐' },
    { name: 'Loyalty', href: '/dashboard/loyalty', icon: '🎁' },
  ]},
  { section: 'Marketing', items: [
    { name: 'Campaigns', href: '/dashboard/campaigns', icon: '📢' },
    { name: 'Coupons', href: '/dashboard/coupons', icon: '🎫' },
    { name: 'Email', href: '/dashboard/email', icon: '📧' },
    { name: 'SEO', href: '/dashboard/seo', icon: '🔍' },
  ]},
  { section: 'Operations', items: [
    { name: 'Shipping', href: '/dashboard/shipping', icon: '🚚' },
    { name: 'Taxes', href: '/dashboard/taxes', icon: '💰' },
    { name: 'Warehouses', href: '/dashboard/warehouses', icon: '🏭' },
    { name: 'POS', href: '/dashboard/pos', icon: '📱' },
  ]},
  { section: 'Platform', items: [
    { name: 'Storefront', href: '/dashboard/storefront', icon: '🌐' },
    { name: 'Team', href: '/dashboard/team', icon: '👥' },
    { name: 'API', href: '/dashboard/api', icon: '🔑' },
    { name: 'Billing', href: '/dashboard/billing', icon: '💳' },
    { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
  ]},
]

export const ORDER_STATUSES = ['Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned']
export const PAYMENT_STATUSES = ['Pending', 'Authorized', 'Captured', 'Refunded', 'Failed', 'Chargeback']
export const PRODUCT_STATUSES = ['Active', 'Draft', 'Archived']
export const FULFILLMENT_STATUSES = ['Unfulfilled', 'Partially Fulfilled', 'Fulfilled', 'Shipped', 'Delivered']

export const PLANES = [
  { name: 'Starter', price: 29, features: ['100 products', '1K orders/mo', '2 staff', 'Basic analytics', 'Email support'], },
  { name: 'Growth', price: 79, features: ['1K products', '10K orders/mo', '5 staff', 'Advanced analytics', 'Coupons & discounts', 'Priority support'], popular: true },
  { name: 'Scale', price: 199, features: ['10K products', '100K orders/mo', '20 staff', 'Custom reports', 'Multi-channel', 'API access', 'Dedicated support'], },
  { name: 'Enterprise', price: 499, features: ['Unlimited', 'Unlimited orders', 'Unlimited staff', 'Custom integrations', 'White-label', 'SLA', 'On-premise'] }
]

export const CHART_COLORS = ['#d946ef', '#8b5cf6', '#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#ec4899', '#14b8a6']
