// ============================================================
// MarketForge — Mock Data
// Enterprise E-commerce Platform
// ============================================================

// ─── User ───────────────────────────────────────────────────

export const MOCK_USER = {
  id: 'usr_001',
  name: 'Khalid Khan',
  email: 'khalid@marketforge.io',
  role: 'owner',
  store: 'MarketForge Store',
  plan: 'Scale',
  revenue: 892400,
  orders: 12847,
  customers: 8920,
  conversionRate: 3.8,
}

// ─── Products (12 items) ────────────────────────────────────

export const MOCK_PRODUCTS = [
  { id: 'p1', name: 'Wireless Pro Headphones', sku: 'WPH-001', price: 149.99, cost: 42.50, stock: 845, status: 'Active', category: 'Electronics', image: '🎧', sales: 2340, rating: 4.8, reviews: 456 },
  { id: 'p2', name: 'Ergonomic Office Chair', sku: 'EOC-002', price: 399.99, cost: 125.00, stock: 234, status: 'Active', category: 'Furniture', image: '🪑', sales: 890, rating: 4.6, reviews: 234 },
  { id: 'p3', name: 'Smart Fitness Watch', sku: 'SFW-003', price: 249.99, cost: 68.00, stock: 1200, status: 'Active', category: 'Wearables', image: '⌚', sales: 3100, rating: 4.7, reviews: 678 },
  { id: 'p4', name: 'Organic Green Tea Set', sku: 'OGT-004', price: 34.99, cost: 8.50, stock: 4500, status: 'Active', category: 'Food & Drink', image: '🍵', sales: 8900, rating: 4.9, reviews: 1234 },
  { id: 'p5', name: 'Premium Leather Wallet', sku: 'PLW-005', price: 79.99, cost: 18.00, stock: 670, status: 'Active', category: 'Accessories', image: '👛', sales: 4500, rating: 4.5, reviews: 890 },
  { id: 'p6', name: 'Portable Bluetooth Speaker', sku: 'PBS-006', price: 89.99, cost: 25.00, stock: 1560, status: 'Active', category: 'Electronics', image: '🔊', sales: 5600, rating: 4.6, reviews: 1100 },
  { id: 'p7', name: 'Bamboo Cutting Board Set', sku: 'BCB-007', price: 44.99, cost: 12.00, stock: 2300, status: 'Active', category: 'Kitchen', image: '🪵', sales: 3200, rating: 4.8, reviews: 567 },
  { id: 'p8', name: 'Yoga Mat Premium', sku: 'YMP-008', price: 59.99, cost: 15.00, stock: 1890, status: 'Active', category: 'Fitness', image: '🧘', sales: 2800, rating: 4.7, reviews: 789 },
  { id: 'p9', name: 'Stainless Steel Water Bottle', sku: 'SSW-009', price: 24.99, cost: 5.50, stock: 6700, status: 'Active', category: 'Kitchen', image: '🥤', sales: 12400, rating: 4.8, reviews: 2340 },
  { id: 'p10', name: 'Wireless Charging Pad', sku: 'WCP-010', price: 39.99, cost: 9.00, stock: 3400, status: 'Active', category: 'Electronics', image: '🔋', sales: 7800, rating: 4.4, reviews: 1567 },
  { id: 'p11', name: 'Memory Foam Pillow', sku: 'MFP-011', price: 49.99, cost: 12.00, stock: 2100, status: 'Active', category: 'Home', image: '🛏️', sales: 4200, rating: 4.6, reviews: 890 },
  { id: 'p12', name: 'Resistance Band Set', sku: 'RBS-012', price: 29.99, cost: 6.00, stock: 5600, status: 'Active', category: 'Fitness', image: '💪', sales: 9800, rating: 4.7, reviews: 1890 },
]

// ─── Extended Products (batch 2 — draft / archived) ─────────

export const MOCK_PRODUCTS_EXTENDED = [
  { id: 'p13', name: 'USB-C Hub Adapter', sku: 'UCH-013', price: 45.99, cost: 11.00, stock: 0, status: 'Archived', category: 'Electronics', image: '🔌', sales: 6700, rating: 4.3, reviews: 890 },
  { id: 'p14', name: 'Minimalist Desk Lamp', sku: 'MDL-014', price: 64.99, cost: 19.00, stock: 0, status: 'Draft', category: 'Home', image: '💡', sales: 0, rating: 0, reviews: 0 },
  { id: 'p15', name: 'Aromatherapy Diffuser', sku: 'ARD-015', price: 54.99, cost: 16.50, stock: 0, status: 'Draft', category: 'Home', image: '🌿', sales: 0, rating: 0, reviews: 0 },
  { id: 'p16', name: 'Silk Sleep Mask', sku: 'SSM-016', price: 19.99, cost: 3.50, stock: 4200, status: 'Active', category: 'Accessories', image: '😴', sales: 3400, rating: 4.7, reviews: 567 },
  { id: 'p17', name: 'Portable Espresso Maker', sku: 'PEM-017', price: 89.99, cost: 28.00, stock: 340, status: 'Active', category: 'Kitchen', image: '☕', sales: 2100, rating: 4.8, reviews: 430 },
  { id: 'p18', name: 'Noise Machine White', sku: 'NMW-018', price: 39.99, cost: 10.00, stock: 1900, status: 'Active', category: 'Home', image: '🔊', sales: 3600, rating: 4.5, reviews: 720 },
  { id: 'p19', name: 'Copper Insulated Mug', sku: 'CIM-019', price: 32.99, cost: 8.50, stock: 3200, status: 'Active', category: 'Kitchen', image: '☕', sales: 5400, rating: 4.6, reviews: 1020 },
  { id: 'p20', name: 'Adjustable Laptop Stand', sku: 'ALS-020', price: 54.99, cost: 14.00, stock: 1450, status: 'Active', category: 'Electronics', image: '💻', sales: 4100, rating: 4.7, reviews: 860 },
]

// ─── Orders (10 items) ─────────────────────────────────────

export const MOCK_ORDERS = [
  { id: 'ORD-7842', customer: 'Emma Wilson', email: 'emma@email.com', items: 3, total: 284.97, status: 'Delivered', payment: 'Credit Card', date: '2026-09-15', shipping: 'Express' },
  { id: 'ORD-7841', customer: 'James Lee', email: 'james@email.com', items: 1, total: 399.99, status: 'Shipped', payment: 'PayPal', date: '2026-09-15', shipping: 'Standard' },
  { id: 'ORD-7840', customer: 'Maria Garcia', email: 'maria@email.com', items: 5, total: 412.45, status: 'Processing', payment: 'Credit Card', date: '2026-09-14', shipping: 'Express' },
  { id: 'ORD-7839', customer: 'David Kim', email: 'david@email.com', items: 2, total: 119.98, status: 'Delivered', payment: 'Apple Pay', date: '2026-09-14', shipping: 'Standard' },
  { id: 'ORD-7838', customer: 'Sarah Johnson', email: 'sarah@email.com', items: 1, total: 249.99, status: 'Delivered', payment: 'Credit Card', date: '2026-09-13', shipping: 'Express' },
  { id: 'ORD-7837', customer: 'Michael Brown', email: 'michael@email.com', items: 4, total: 567.96, status: 'Shipped', payment: 'Credit Card', date: '2026-09-13', shipping: 'Express' },
  { id: 'ORD-7836', customer: 'Lisa Wang', email: 'lisa@email.com', items: 2, total: 169.98, status: 'Returned', payment: 'PayPal', date: '2026-09-12', shipping: 'Standard' },
  { id: 'ORD-7835', customer: 'Robert Davis', email: 'robert@email.com', items: 3, total: 234.97, status: 'Delivered', payment: 'Credit Card', date: '2026-09-12', shipping: 'Standard' },
  { id: 'ORD-7834', customer: 'Jennifer Martinez', email: 'jen@email.com', items: 1, total: 79.99, status: 'Cancelled', payment: 'Failed', date: '2026-09-11', shipping: 'Standard' },
  { id: 'ORD-7833', customer: 'Daniel Anderson', email: 'daniel@email.com', items: 6, total: 834.94, status: 'Delivered', payment: 'Credit Card', date: '2026-09-11', shipping: 'Express' },
]

// ─── Extended Orders (batch 2) ──────────────────────────────

export const MOCK_ORDERS_EXTENDED = [
  { id: 'ORD-7832', customer: 'Rachel Green', email: 'rachel@email.com', items: 2, total: 179.98, status: 'Delivered', payment: 'Credit Card', date: '2026-09-10', shipping: 'Standard' },
  { id: 'ORD-7831', customer: 'Tom Wilson', email: 'tom@email.com', items: 1, total: 29.99, status: 'Delivered', payment: 'Apple Pay', date: '2026-09-10', shipping: 'Standard' },
  { id: 'ORD-7830', customer: 'Priya Patel', email: 'priya@email.com', items: 4, total: 524.96, status: 'Shipped', payment: 'Credit Card', date: '2026-09-09', shipping: 'Express' },
  { id: 'ORD-7829', customer: 'Oscar Martinez', email: 'oscar@email.com', items: 3, total: 209.97, status: 'Delivered', payment: 'PayPal', date: '2026-09-09', shipping: 'Standard' },
  { id: 'ORD-7828', customer: 'Sophie Turner', email: 'sophie@email.com', items: 1, total: 149.99, status: 'Returned', payment: 'Credit Card', date: '2026-09-08', shipping: 'Express' },
  { id: 'ORD-7827', customer: 'Ahmed Hassan', email: 'ahmed@email.com', items: 2, total: 89.98, status: 'Delivered', payment: 'Debit Card', date: '2026-09-08', shipping: 'Standard' },
  { id: 'ORD-7826', customer: 'Chloe Bennett', email: 'chloe@email.com', items: 5, total: 674.95, status: 'Delivered', payment: 'Credit Card', date: '2026-09-07', shipping: 'Express' },
  { id: 'ORD-7825', customer: 'Marcus Reed', email: 'marcus@email.com', items: 1, total: 399.99, status: 'Cancelled', payment: 'Failed', date: '2026-09-07', shipping: 'Standard' },
  { id: 'ORD-7824', customer: 'Aiko Tanaka', email: 'aiko@email.com', items: 3, total: 174.97, status: 'Delivered', payment: 'Credit Card', date: '2026-09-06', shipping: 'Standard' },
  { id: 'ORD-7823', customer: 'Jake Morrison', email: 'jake@email.com', items: 2, total: 319.98, status: 'Shipped', payment: 'Apple Pay', date: '2026-09-06', shipping: 'Express' },
  { id: 'ORD-7822', customer: 'Nadia Kowalski', email: 'nadia@email.com', items: 4, total: 445.96, status: 'Delivered', payment: 'Credit Card', date: '2026-09-05', shipping: 'Standard' },
  { id: 'ORD-7821', customer: 'Ben Wallace', email: 'ben@email.com', items: 1, total: 59.99, status: 'Processing', payment: 'Credit Card', date: '2026-09-05', shipping: 'Standard' },
  { id: 'ORD-7820', customer: 'Fatima Al-Rashid', email: 'fatima@email.com', items: 6, total: 934.94, status: 'Delivered', payment: 'Credit Card', date: '2026-09-04', shipping: 'Express' },
  { id: 'ORD-7819', customer: 'Leo Chang', email: 'leo@email.com', items: 2, total: 114.98, status: 'Delivered', payment: 'PayPal', date: '2026-09-04', shipping: 'Standard' },
  { id: 'ORD-7818', customer: 'Grace Okafor', email: 'grace@email.com', items: 3, total: 269.97, status: 'Shipped', payment: 'Credit Card', date: '2026-09-03', shipping: 'Express' },
]

// ─── Customers (8 items) ────────────────────────────────────

export const MOCK_CUSTOMERS = [
  { id: 'c1', name: 'Emma Wilson', email: 'emma@email.com', orders: 23, totalSpent: 4520, lastOrder: '2026-09-15', status: 'VIP', joined: '2025-03-15', city: 'New York', country: 'US' },
  { id: 'c2', name: 'James Lee', email: 'james@email.com', orders: 15, totalSpent: 2890, lastOrder: '2026-09-15', status: 'Active', joined: '2025-06-20', city: 'San Francisco', country: 'US' },
  { id: 'c3', name: 'Maria Garcia', email: 'maria@email.com', orders: 31, totalSpent: 6780, lastOrder: '2026-09-14', status: 'VIP', joined: '2025-01-10', city: 'Miami', country: 'US' },
  { id: 'c4', name: 'David Kim', email: 'david@email.com', orders: 8, totalSpent: 1230, lastOrder: '2026-09-14', status: 'Active', joined: '2025-09-01', city: 'Los Angeles', country: 'US' },
  { id: 'c5', name: 'Sarah Johnson', email: 'sarah@email.com', orders: 42, totalSpent: 8920, lastOrder: '2026-09-13', status: 'VIP', joined: '2024-11-20', city: 'Chicago', country: 'US' },
  { id: 'c6', name: 'Michael Brown', email: 'michael@email.com', orders: 5, totalSpent: 890, lastOrder: '2026-09-13', status: 'Active', joined: '2025-10-05', city: 'Houston', country: 'US' },
  { id: 'c7', name: 'Lisa Wang', email: 'lisa@email.com', orders: 19, totalSpent: 3450, lastOrder: '2026-09-12', status: 'Active', joined: '2025-04-15', city: 'Seattle', country: 'US' },
  { id: 'c8', name: 'Robert Davis', email: 'robert@email.com', orders: 27, totalSpent: 5230, lastOrder: '2026-09-12', status: 'VIP', joined: '2025-02-01', city: 'Boston', country: 'US' },
]

// ─── Extended Customers ─────────────────────────────────────

export const MOCK_CUSTOMERS_EXTENDED = [
  { id: 'c9', name: 'Jennifer Martinez', email: 'jen@email.com', orders: 3, totalSpent: 210, lastOrder: '2026-09-11', status: 'Active', joined: '2026-08-01', city: 'Phoenix', country: 'US' },
  { id: 'c10', name: 'Daniel Anderson', email: 'daniel@email.com', orders: 34, totalSpent: 7800, lastOrder: '2026-09-11', status: 'VIP', joined: '2024-10-10', city: 'Denver', country: 'US' },
  { id: 'c11', name: 'Rachel Green', email: 'rachel@email.com', orders: 12, totalSpent: 2340, lastOrder: '2026-09-10', status: 'Active', joined: '2025-07-20', city: 'Portland', country: 'US' },
  { id: 'c12', name: 'Tom Wilson', email: 'tom@email.com', orders: 7, totalSpent: 560, lastOrder: '2026-09-10', status: 'Active', joined: '2025-12-05', city: 'Austin', country: 'US' },
  { id: 'c13', name: 'Priya Patel', email: 'priya@email.com', orders: 28, totalSpent: 5430, lastOrder: '2026-09-09', status: 'VIP', joined: '2025-01-25', city: 'San Jose', country: 'US' },
  { id: 'c14', name: 'Oscar Martinez', email: 'oscar@email.com', orders: 16, totalSpent: 2780, lastOrder: '2026-09-09', status: 'Active', joined: '2025-05-12', city: 'San Diego', country: 'US' },
  { id: 'c15', name: 'Sophie Turner', email: 'sophie@email.com', orders: 4, totalSpent: 680, lastOrder: '2026-09-08', status: 'Active', joined: '2026-07-15', city: 'Nashville', country: 'US' },
  { id: 'c16', name: 'Ahmed Hassan', email: 'ahmed@email.com', orders: 21, totalSpent: 3980, lastOrder: '2026-09-08', status: 'Active', joined: '2025-03-30', city: 'Atlanta', country: 'US' },
  { id: 'c17', name: 'Chloe Bennett', email: 'chloe@email.com', orders: 38, totalSpent: 7640, lastOrder: '2026-09-07', status: 'VIP', joined: '2024-09-01', city: 'Boston', country: 'US' },
  { id: 'c18', name: 'Marcus Reed', email: 'marcus@email.com', orders: 2, totalSpent: 320, lastOrder: '2026-09-07', status: 'Active', joined: '2026-08-20', city: 'Charlotte', country: 'US' },
  { id: 'c19', name: 'Aiko Tanaka', email: 'aiko@email.com', orders: 18, totalSpent: 3120, lastOrder: '2026-09-06', status: 'Active', joined: '2025-04-18', city: 'Seattle', country: 'US' },
  { id: 'c20', name: 'Jake Morrison', email: 'jake@email.com', orders: 9, totalSpent: 1560, lastOrder: '2026-09-06', status: 'Active', joined: '2025-11-22', city: 'Detroit', country: 'US' },
]

// ─── Customer Segments ──────────────────────────────────────

export const MOCK_SEGMENTS = [
  { id: 'seg1', name: 'VIP Customers', count: 1240, criteria: 'Total spent > $3,000 OR Orders > 20', growth: 12.4, revenue: 520000 },
  { id: 'seg2', name: 'High Value', count: 2890, criteria: 'Total spent > $1,000', growth: 8.7, revenue: 340000 },
  { id: 'seg3', name: 'Repeat Buyers', count: 3450, criteria: 'Orders > 3', growth: 15.2, revenue: 280000 },
  { id: 'seg4', name: 'New Customers', count: 1890, criteria: 'Joined < 30 days ago', growth: 22.1, revenue: 45000 },
  { id: 'seg5', name: 'At Risk', count: 670, criteria: 'No order in 60+ days', growth: -5.3, revenue: 12000 },
  { id: 'seg6', name: 'Cart Abandoners', count: 2340, criteria: 'Added to cart but no purchase', growth: 3.1, revenue: 0 },
  { id: 'seg7', name: 'Email Engaged', count: 4560, criteria: 'Opened 3+ emails in 30 days', growth: 18.9, revenue: 190000 },
  { id: 'seg8', name: 'International', count: 1230, criteria: 'Country != US', growth: 25.6, revenue: 150000 },
]

// ─── Coupons (6 items) ──────────────────────────────────────

export const MOCK_COUPONS = [
  { id: 'cp1', code: 'WELCOME20', type: 'Percentage', value: 20, used: 1240, limit: 5000, status: 'Active', minOrder: 50, expires: '2026-12-31' },
  { id: 'cp2', code: 'FALL10', type: 'Fixed', value: 10, used: 890, limit: 2000, status: 'Active', minOrder: 75, expires: '2026-11-30' },
  { id: 'cp3', code: 'VIP50', type: 'Percentage', value: 50, used: 45, limit: 100, status: 'Active', minOrder: 200, expires: '2026-10-15' },
  { id: 'cp4', code: 'FLASH30', type: 'Percentage', value: 30, used: 3400, limit: 3400, status: 'Expired', minOrder: 0, expires: '2026-09-01' },
  { id: 'cp5', code: 'SHIP0', type: 'Shipping', value: 0, used: 2100, limit: 10000, status: 'Active', minOrder: 100, expires: '2026-12-31' },
  { id: 'cp6', code: 'BUNDLE15', type: 'Percentage', value: 15, used: 560, limit: 3000, status: 'Active', minOrder: 150, expires: '2026-11-15' },
]

// ─── Extended Coupons ───────────────────────────────────────

export const MOCK_COUPONS_EXTENDED = [
  { id: 'cp7', code: 'HOLIDAY25', type: 'Percentage', value: 25, used: 0, limit: 10000, status: 'Scheduled', minOrder: 75, expires: '2026-12-25' },
  { id: 'cp8', code: 'FIRSTORDER', type: 'Fixed', value: 15, used: 890, limit: 5000, status: 'Active', minOrder: 0, expires: '2026-12-31' },
  { id: 'cp9', code: 'MEGA40', type: 'Percentage', value: 40, used: 2100, limit: 2100, status: 'Expired', minOrder: 100, expires: '2026-08-01' },
  { id: 'cp10', code: 'LOYALTY10', type: 'Percentage', value: 10, used: 3200, limit: 10000, status: 'Active', minOrder: 0, expires: '2026-12-31' },
  { id: 'cp11', code: 'REFER20', type: 'Fixed', value: 20, used: 450, limit: 2000, status: 'Active', minOrder: 60, expires: '2026-12-31' },
  { id: 'cp12', code: 'SUNDAE15', type: 'Percentage', value: 15, used: 180, limit: 500, status: 'Active', minOrder: 50, expires: '2026-10-31' },
]

// ─── Campaigns (5 items) ────────────────────────────────────

export const MOCK_CAMPAIGNS = [
  { id: 'cmp1', name: 'Fall Collection Launch', type: 'Email + Social', status: 'Active', sent: 45000, opened: 28000, clicked: 8400, conversions: 520, revenue: 34500, budget: 5000, spent: 3200 },
  { id: 'cmp2', name: 'Back to School', type: 'Email', status: 'Completed', sent: 32000, opened: 19200, clicked: 5760, conversions: 380, revenue: 22400, budget: 3000, spent: 2800 },
  { id: 'cmp3', name: 'VIP Early Access', type: 'Email', status: 'Active', sent: 8500, opened: 6800, clicked: 3400, conversions: 280, revenue: 18900, budget: 1000, spent: 450 },
  { id: 'cmp4', name: 'Social Media Blitz', type: 'Social', status: 'Scheduled', sent: 0, opened: 0, clicked: 0, conversions: 0, revenue: 0, budget: 8000, spent: 0 },
  { id: 'cmp5', name: 'Abandoned Cart Recovery', type: 'Automated', status: 'Active', sent: 12400, opened: 7440, clicked: 2976, conversions: 450, revenue: 15600, budget: 2000, spent: 1200 },
]

// ─── Extended Campaigns ─────────────────────────────────────

export const MOCK_CAMPAIGNS_EXTENDED = [
  { id: 'cmp6', name: 'Black Friday Countdown', type: 'Email + SMS', status: 'Scheduled', sent: 0, opened: 0, clicked: 0, conversions: 0, revenue: 0, budget: 12000, spent: 0 },
  { id: 'cmp7', name: 'Product Launch: Diffuser', type: 'Email', status: 'Draft', sent: 0, opened: 0, clicked: 0, conversions: 0, revenue: 0, budget: 1500, spent: 0 },
  { id: 'cmp8', name: 'Summer Clearance', type: 'Email + Social', status: 'Completed', sent: 58000, opened: 34800, clicked: 10440, conversions: 820, revenue: 52000, budget: 6000, spent: 5800 },
  { id: 'cmp9', name: 'Win-back Lapsed Users', type: 'Automated', status: 'Active', sent: 8900, opened: 4450, clicked: 1780, conversions: 190, revenue: 8700, budget: 1500, spent: 900 },
  { id: 'cmp10', name: 'Holiday Gift Guide', type: 'Email', status: 'Scheduled', sent: 0, opened: 0, clicked: 0, conversions: 0, revenue: 0, budget: 4000, spent: 0 },
]

// ─── Shipping (5 items) ─────────────────────────────────────

export const MOCK_SHIPPING = [
  { id: 'sh1', carrier: 'FedEx Express', method: 'Express (1-2 days)', rate: 12.99, zones: 8, active: true, avgDelivery: '1.8 days', onTime: 97.2 },
  { id: 'sh2', carrier: 'UPS Ground', method: 'Standard (3-5 days)', rate: 7.99, zones: 12, active: true, avgDelivery: '3.2 days', onTime: 95.8 },
  { id: 'sh3', carrier: 'USPS Priority', method: 'Priority (2-3 days)', rate: 8.49, zones: 10, active: true, avgDelivery: '2.5 days', onTime: 94.1 },
  { id: 'sh4', carrier: 'DHL International', method: 'International (5-10 days)', rate: 24.99, zones: 25, active: true, avgDelivery: '7.2 days', onTime: 91.5 },
  { id: 'sh5', carrier: 'Local Courier', method: 'Same Day', rate: 19.99, zones: 1, active: true, avgDelivery: '4.2 hours', onTime: 98.5 },
]

// ─── Warehouses (4 items) ───────────────────────────────────

export const MOCK_WAREHOUSES = [
  { id: 'wh1', name: 'East Coast Hub', location: 'Newark, NJ', capacity: 50000, used: 34200, orders: 4500, status: 'active', pickRate: 94.2 },
  { id: 'wh2', name: 'West Coast Hub', location: 'Los Angeles, CA', capacity: 40000, used: 28600, orders: 3200, status: 'active', pickRate: 92.8 },
  { id: 'wh3', name: 'Central Distribution', location: 'Dallas, TX', capacity: 35000, used: 18900, orders: 2100, status: 'active', pickRate: 96.1 },
  { id: 'wh4', name: 'European Hub', location: 'Amsterdam, NL', capacity: 25000, used: 12400, orders: 1800, status: 'active', pickRate: 93.5 },
]

// ─── Reviews (5 items) ──────────────────────────────────────

export const MOCK_REVIEWS = [
  { id: 'r1', product: 'Wireless Pro Headphones', customer: 'Emma Wilson', rating: 5, title: 'Amazing sound quality!', content: 'Best headphones I have ever owned. Crystal clear audio and comfortable fit.', date: '2026-09-14', helpful: 45, status: 'approved' },
  { id: 'r2', product: 'Ergonomic Office Chair', customer: 'James Lee', rating: 4, title: 'Very comfortable', content: 'Great chair for long work hours. Only wish the armrests were adjustable.', date: '2026-09-13', helpful: 32, status: 'approved' },
  { id: 'r3', product: 'Smart Fitness Watch', customer: 'Maria Garcia', rating: 5, title: 'Perfect fitness tracker', content: 'Tracks everything I need. Battery lasts over a week!', date: '2026-09-12', helpful: 28, status: 'approved' },
  { id: 'r4', product: 'Organic Green Tea Set', customer: 'Sarah Johnson', rating: 5, title: 'Delicious and fresh', content: 'The quality is outstanding. Will definitely reorder.', date: '2026-09-11', helpful: 19, status: 'approved' },
  { id: 'r5', product: 'Premium Leather Wallet', customer: 'David Kim', rating: 3, title: 'Good but not great', content: 'Leather quality is nice but stitching could be better.', date: '2026-09-10', helpful: 12, status: 'approved' },
]

// ─── Extended Reviews ───────────────────────────────────────

export const MOCK_REVIEWS_EXTENDED = [
  { id: 'r6', product: 'Portable Bluetooth Speaker', customer: 'Michael Brown', rating: 5, title: 'Incredible sound for the size', content: 'Packs a punch! Perfect for outdoor gatherings and travel.', date: '2026-09-09', helpful: 38, status: 'approved' },
  { id: 'r7', product: 'Bamboo Cutting Board Set', customer: 'Lisa Wang', rating: 4, title: 'Solid and beautiful', content: 'High-quality bamboo. The juice groove is a nice touch.', date: '2026-09-08', helpful: 22, status: 'approved' },
  { id: 'r8', product: 'Yoga Mat Premium', customer: 'Rachel Green', rating: 5, title: 'Best mat I have tried', content: 'Non-slip surface is amazing. Great cushioning for joints.', date: '2026-09-07', helpful: 17, status: 'approved' },
  { id: 'r9', product: 'Stainless Steel Water Bottle', customer: 'Daniel Anderson', rating: 5, title: 'Keeps drinks cold all day', content: 'Ice still intact after 24 hours. No condensation outside.', date: '2026-09-06', helpful: 56, status: 'approved' },
  { id: 'r10', product: 'Wireless Charging Pad', customer: 'Priya Patel', rating: 4, title: 'Works great with my phone', content: 'Charges fast and looks sleek on my desk. Wish it was a bit bigger.', date: '2026-09-05', helpful: 14, status: 'approved' },
  { id: 'r11', product: 'Memory Foam Pillow', customer: 'Tom Wilson', rating: 3, title: 'Too firm for me', content: 'Quality is good but I prefer softer pillows. Takes time to adjust.', date: '2026-09-04', helpful: 8, status: 'pending' },
  { id: 'r12', product: 'Resistance Band Set', customer: 'Ahmed Hassan', rating: 5, title: 'Excellent variety', content: 'Great range of resistance levels. Perfect for home workouts.', date: '2026-09-03', helpful: 41, status: 'approved' },
]

// ─── Payments (5 items) ─────────────────────────────────────

export const MOCK_PAYMENTS = [
  { id: 'pay1', order: 'ORD-7842', customer: 'Emma Wilson', amount: 284.97, method: 'Credit Card', card: '****4242', status: 'Captured', date: '2026-09-15', gateway: 'Stripe' },
  { id: 'pay2', order: 'ORD-7841', customer: 'James Lee', amount: 399.99, method: 'PayPal', card: '-', status: 'Captured', date: '2026-09-15', gateway: 'PayPal' },
  { id: 'pay3', order: 'ORD-7840', customer: 'Maria Garcia', amount: 412.45, method: 'Credit Card', card: '****8888', status: 'Pending', date: '2026-09-14', gateway: 'Stripe' },
  { id: 'pay4', order: 'ORD-7836', customer: 'Lisa Wang', amount: 169.98, method: 'Credit Card', card: '****1234', status: 'Refunded', date: '2026-09-12', gateway: 'Stripe' },
  { id: 'pay5', order: 'ORD-7834', customer: 'Jennifer Martinez', amount: 79.99, method: 'Credit Card', card: '****5678', status: 'Failed', date: '2026-09-11', gateway: 'Stripe' },
]

// ─── Extended Payments ──────────────────────────────────────

export const MOCK_PAYMENTS_EXTENDED = [
  { id: 'pay6', order: 'ORD-7832', customer: 'Rachel Green', amount: 179.98, method: 'Credit Card', card: '****9012', status: 'Captured', date: '2026-09-10', gateway: 'Stripe' },
  { id: 'pay7', order: 'ORD-7831', customer: 'Tom Wilson', amount: 29.99, method: 'Apple Pay', card: '-', status: 'Captured', date: '2026-09-10', gateway: 'Apple Pay' },
  { id: 'pay8', order: 'ORD-7830', customer: 'Priya Patel', amount: 524.96, method: 'Credit Card', card: '****3456', status: 'Captured', date: '2026-09-09', gateway: 'Stripe' },
  { id: 'pay9', order: 'ORD-7829', customer: 'Oscar Martinez', amount: 209.97, method: 'PayPal', card: '-', status: 'Captured', date: '2026-09-09', gateway: 'PayPal' },
  { id: 'pay10', order: 'ORD-7828', customer: 'Sophie Turner', amount: 149.99, method: 'Credit Card', card: '****7890', status: 'Refunded', date: '2026-09-08', gateway: 'Stripe' },
  { id: 'pay11', order: 'ORD-7827', customer: 'Ahmed Hassan', amount: 89.98, method: 'Debit Card', card: '****2345', status: 'Captured', date: '2026-09-08', gateway: 'Stripe' },
  { id: 'pay12', order: 'ORD-7826', customer: 'Chloe Bennett', amount: 674.95, method: 'Credit Card', card: '****6789', status: 'Captured', date: '2026-09-07', gateway: 'Stripe' },
  { id: 'pay13', order: 'ORD-7825', customer: 'Marcus Reed', amount: 399.99, method: 'Credit Card', card: '****0123', status: 'Failed', date: '2026-09-07', gateway: 'Stripe' },
  { id: 'pay14', order: 'ORD-7824', customer: 'Aiko Tanaka', amount: 174.97, method: 'Credit Card', card: '****4567', status: 'Captured', date: '2026-09-06', gateway: 'Stripe' },
  { id: 'pay15', order: 'ORD-7823', customer: 'Jake Morrison', amount: 319.98, method: 'Apple Pay', card: '-', status: 'Captured', date: '2026-09-06', gateway: 'Apple Pay' },
]

// ─── SEO Data ───────────────────────────────────────────────

export const MOCK_SEO = {
  score: 87,
  organicTraffic: 45200,
  keywords: 1240,
  backlinks: 3400,
  avgPosition: 14.2,
  pages: [
    { url: '/', score: 95, traffic: 12400, keywords: 340 },
    { url: '/products/wireless-pro-headphones', score: 92, traffic: 8900, keywords: 280 },
    { url: '/collections/electronics', score: 88, traffic: 5600, keywords: 180 },
    { url: '/blog/best-office-chairs-2026', score: 84, traffic: 4200, keywords: 120 },
    { url: '/products/smart-fitness-watch', score: 82, traffic: 3800, keywords: 160 },
  ],
}

// ─── SEO Keywords ───────────────────────────────────────────

export const MOCK_SEO_KEYWORDS = [
  { keyword: 'wireless headphones', position: 3, volume: 12400, difficulty: 72, trend: 'up', page: '/products/wireless-pro-headphones' },
  { keyword: 'ergonomic office chair', position: 7, volume: 8900, difficulty: 65, trend: 'up', page: '/products/ergonomic-office-chair' },
  { keyword: 'smart fitness watch', position: 5, volume: 9800, difficulty: 78, trend: 'stable', page: '/products/smart-fitness-watch' },
  { keyword: 'organic green tea', position: 2, volume: 6700, difficulty: 45, trend: 'up', page: '/products/organic-green-tea-set' },
  { keyword: 'premium leather wallet', position: 11, volume: 4500, difficulty: 58, trend: 'down', page: '/products/premium-leather-wallet' },
  { keyword: 'bluetooth speaker portable', position: 8, volume: 14200, difficulty: 82, trend: 'up', page: '/products/portable-bluetooth-speaker' },
  { keyword: 'bamboo cutting board', position: 4, volume: 5600, difficulty: 42, trend: 'up', page: '/products/bamboo-cutting-board-set' },
  { keyword: 'yoga mat premium', position: 6, volume: 7800, difficulty: 55, trend: 'stable', page: '/products/yoga-mat-premium' },
  { keyword: 'stainless steel water bottle', position: 3, volume: 18900, difficulty: 70, trend: 'up', page: '/products/stainless-steel-water-bottle' },
  { keyword: 'wireless charging pad', position: 9, volume: 11200, difficulty: 68, trend: 'up', page: '/products/wireless-charging-pad' },
  { keyword: 'memory foam pillow', position: 14, volume: 8400, difficulty: 60, trend: 'down', page: '/products/memory-foam-pillow' },
  { keyword: 'resistance bands set', position: 5, volume: 15600, difficulty: 52, trend: 'up', page: '/products/resistance-band-set' },
]

// ─── Return Rates ───────────────────────────────────────────

export const MOCK_RETURN_RATES = {
  total: 340,
  rate: 2.6,
  topReasons: [
    { reason: 'Wrong size', count: 120, pct: 35.3 },
    { reason: 'Not as described', count: 68, pct: 20.0 },
    { reason: 'Changed mind', count: 85, pct: 25.0 },
    { reason: 'Defective', count: 42, pct: 12.4 },
    { reason: 'Other', count: 25, pct: 7.4 },
  ],
}

// ─── Returns by Month ───────────────────────────────────────

export const MOCK_RETURNS_BY_MONTH = [
  { month: 'Jan', returns: 12, rate: 1.8, refunded: 1450 },
  { month: 'Feb', returns: 15, rate: 2.0, refunded: 1820 },
  { month: 'Mar', returns: 18, rate: 2.1, refunded: 2100 },
  { month: 'Apr', returns: 22, rate: 2.4, refunded: 2680 },
  { month: 'May', returns: 20, rate: 2.3, refunded: 2400 },
  { month: 'Jun', returns: 24, rate: 2.4, refunded: 2890 },
  { month: 'Jul', returns: 28, rate: 2.7, refunded: 3340 },
  { month: 'Aug', returns: 30, rate: 2.6, refunded: 3600 },
  { month: 'Sep', returns: 32, rate: 2.7, refunded: 3840 },
]

// ─── Revenue by Month (9 items) ─────────────────────────────

export const MOCK_REVENUE = [
  { month: 'Jan', revenue: 52000, orders: 680, avgOrder: 76.47, customers: 420, returns: 12 },
  { month: 'Feb', revenue: 58000, orders: 750, avgOrder: 77.33, customers: 480, returns: 15 },
  { month: 'Mar', revenue: 65000, orders: 840, avgOrder: 77.38, customers: 520, returns: 18 },
  { month: 'Apr', revenue: 72000, orders: 920, avgOrder: 78.26, customers: 580, returns: 22 },
  { month: 'May', revenue: 68000, orders: 870, avgOrder: 78.16, customers: 540, returns: 20 },
  { month: 'Jun', revenue: 78000, orders: 980, avgOrder: 79.59, customers: 610, returns: 24 },
  { month: 'Jul', revenue: 85000, orders: 1050, avgOrder: 80.95, customers: 680, returns: 28 },
  { month: 'Aug', revenue: 92000, orders: 1140, avgOrder: 80.70, customers: 720, returns: 30 },
  { month: 'Sep', revenue: 98000, orders: 1200, avgOrder: 81.67, customers: 780, returns: 32 },
]

// ─── Revenue by Category ────────────────────────────────────

export const MOCK_REVENUE_BY_CATEGORY = [
  { category: 'Electronics', revenue: 342000, percentage: 38.3, growth: 12.4 },
  { category: 'Fitness', revenue: 198000, percentage: 22.2, growth: 18.7 },
  { category: 'Kitchen', revenue: 156000, percentage: 17.5, growth: 8.3 },
  { category: 'Accessories', revenue: 112000, percentage: 12.6, growth: 5.2 },
  { category: 'Home', revenue: 54000, percentage: 6.1, growth: 22.1 },
  { category: 'Food & Drink', revenue: 30400, percentage: 3.4, growth: 15.6 },
]

// ─── Revenue by Channel ─────────────────────────────────────

export const MOCK_REVENUE_BY_CHANNEL = [
  { channel: 'Web Store', revenue: 534000, percentage: 59.8, orders: 7890 },
  { channel: 'Mobile App', revenue: 198000, percentage: 22.2, orders: 2840 },
  { channel: 'Marketplace', revenue: 98000, percentage: 11.0, orders: 1420 },
  { channel: 'POS', revenue: 42000, percentage: 4.7, orders: 480 },
  { channel: 'Social Commerce', revenue: 20400, percentage: 2.3, orders: 217 },
]

// ─── Real-time Data ─────────────────────────────────────────

export const MOCK_REALTIME = {
  visitors: 342,
  orders: 12,
  revenue: 2847.92,
  topPages: [
    { path: '/', views: 1240, title: 'Home' },
    { path: '/products/wireless-pro-headphones', views: 890, title: 'Wireless Pro Headphones' },
    { path: '/collections/electronics', views: 560, title: 'Electronics Collection' },
    { path: '/products/smart-fitness-watch', views: 420, title: 'Smart Fitness Watch' },
    { path: '/products/stainless-steel-water-bottle', views: 380, title: 'Stainless Steel Water Bottle' },
  ],
  trafficSources: [
    { source: 'Direct', visitors: 120, percentage: 35.1 },
    { source: 'Organic Search', visitors: 98, percentage: 28.7 },
    { source: 'Social Media', visitors: 65, percentage: 19.0 },
    { source: 'Email', visitors: 34, percentage: 9.9 },
    { source: 'Referral', visitors: 25, percentage: 7.3 },
  ],
  recentOrders: [
    { id: 'ORD-7842', amount: 284.97, time: '2 min ago' },
    { id: 'ORD-7841', amount: 399.99, time: '18 min ago' },
    { id: 'ORD-7840', amount: 412.45, time: '1 hr ago' },
  ],
}

// ─── Live visitor data (hourly) ─────────────────────────────

export const MOCK_LIVE_VISITORS = [
  { time: '00:00', visitors: 120, orders: 4, revenue: 890 },
  { time: '01:00', visitors: 85, orders: 2, revenue: 340 },
  { time: '02:00', visitors: 60, orders: 1, revenue: 150 },
  { time: '03:00', visitors: 45, orders: 0, revenue: 0 },
  { time: '04:00', visitors: 40, orders: 0, revenue: 0 },
  { time: '05:00', visitors: 55, orders: 1, revenue: 80 },
  { time: '06:00', visitors: 110, orders: 3, revenue: 420 },
  { time: '07:00', visitors: 180, orders: 6, revenue: 1200 },
  { time: '08:00', visitors: 280, orders: 10, revenue: 2800 },
  { time: '09:00', visitors: 340, orders: 12, revenue: 2850 },
  { time: '10:00', visitors: 390, orders: 15, revenue: 3400 },
  { time: '11:00', visitors: 420, orders: 18, revenue: 4200 },
  { time: '12:00', visitors: 380, orders: 14, revenue: 3100 },
  { time: '13:00', visitors: 350, orders: 13, revenue: 2900 },
  { time: '14:00', visitors: 342, orders: 12, revenue: 2848 },
]

// ─── Daily visitors (30 days) ───────────────────────────────

export const MOCK_DAILY_VISITORS = [
  { day: 'Sep 1', visitors: 1420, orders: 42, revenue: 3200 },
  { day: 'Sep 2', visitors: 1580, orders: 48, revenue: 3800 },
  { day: 'Sep 3', visitors: 1340, orders: 38, revenue: 2900 },
  { day: 'Sep 4', visitors: 1620, orders: 52, revenue: 4100 },
  { day: 'Sep 5', visitors: 1780, orders: 56, revenue: 4400 },
  { day: 'Sep 6', visitors: 1920, orders: 62, revenue: 4800 },
  { day: 'Sep 7', visitors: 1480, orders: 44, revenue: 3400 },
  { day: 'Sep 8', visitors: 1560, orders: 46, revenue: 3600 },
  { day: 'Sep 9', visitors: 1700, orders: 54, revenue: 4200 },
  { day: 'Sep 10', visitors: 1840, orders: 58, revenue: 4600 },
  { day: 'Sep 11', visitors: 2100, orders: 68, revenue: 5200 },
  { day: 'Sep 12', visitors: 1980, orders: 64, revenue: 4900 },
  { day: 'Sep 13', visitors: 2240, orders: 72, revenue: 5600 },
  { day: 'Sep 14', visitors: 2380, orders: 78, revenue: 6100 },
  { day: 'Sep 15', visitors: 2520, orders: 84, revenue: 6400 },
  { day: 'Sep 16', visitors: 1860, orders: 58, revenue: 4500 },
  { day: 'Sep 17', visitors: 1640, orders: 50, revenue: 3900 },
  { day: 'Sep 18', visitors: 1720, orders: 54, revenue: 4200 },
  { day: 'Sep 19', visitors: 1900, orders: 60, revenue: 4700 },
  { day: 'Sep 20', visitors: 2040, orders: 66, revenue: 5100 },
  { day: 'Sep 21', visitors: 1560, orders: 48, revenue: 3700 },
  { day: 'Sep 22', visitors: 1680, orders: 52, revenue: 4000 },
  { day: 'Sep 23', visitors: 1820, orders: 58, revenue: 4500 },
  { day: 'Sep 24', visitors: 1960, orders: 62, revenue: 4800 },
  { day: 'Sep 25', visitors: 2180, orders: 70, revenue: 5400 },
  { day: 'Sep 26', visitors: 2320, orders: 76, revenue: 5900 },
  { day: 'Sep 27', visitors: 2460, orders: 80, revenue: 6200 },
  { day: 'Sep 28', visitors: 1480, orders: 44, revenue: 3400 },
  { day: 'Sep 29', visitors: 1600, orders: 50, revenue: 3800 },
  { day: 'Sep 30', visitors: 1740, orders: 56, revenue: 4300 },
]

// ─── Funnel Data ────────────────────────────────────────────

export const MOCK_FUNNEL = [
  { stage: 'Store Visitors', count: 45200, percentage: 100 },
  { stage: 'Product Views', count: 32400, percentage: 71.7 },
  { stage: 'Add to Cart', count: 8900, percentage: 19.7 },
  { stage: 'Checkout Started', count: 4200, percentage: 9.3 },
  { stage: 'Payment Completed', count: 2800, percentage: 6.2 },
  { stage: 'Order Confirmed', count: 1200, percentage: 2.7 },
]

// ─── Inventory Alerts ───────────────────────────────────────

export const MOCK_INVENTORY_ALERTS = [
  { id: 'ia1', product: 'Ergonomic Office Chair', sku: 'EOC-002', current: 234, threshold: 100, status: 'warning', warehouse: 'East Coast Hub' },
  { id: 'ia2', product: 'Premium Leather Wallet', sku: 'PLW-005', current: 670, threshold: 500, status: 'warning', warehouse: 'West Coast Hub' },
  { id: 'ia3', product: 'USB-C Hub Adapter', sku: 'UCH-013', current: 0, threshold: 200, status: 'critical', warehouse: 'Central Distribution' },
  { id: 'ia4', product: 'Portable Espresso Maker', sku: 'PEM-017', current: 340, threshold: 300, status: 'warning', warehouse: 'East Coast Hub' },
  { id: 'ia5', product: 'Wireless Charging Pad', sku: 'WCP-010', current: 3400, threshold: 1000, status: 'ok', warehouse: 'West Coast Hub' },
]

// ─── Activity Log (10 items) ────────────────────────────────

export const MOCK_ACTIVITY = [
  { id: '1', user: 'System', action: 'New order ORD-7842 received ($284.97)', type: 'order', time: '2 min ago' },
  { id: '2', user: 'Emma Wilson', action: 'Left 5-star review on Wireless Pro Headphones', type: 'review', time: '15 min ago' },
  { id: '3', user: 'System', action: 'Order ORD-7841 shipped via FedEx Express', type: 'shipping', time: '1 hr ago' },
  { id: '4', user: 'Khalid Khan', action: 'Updated product: Smart Fitness Watch ($249.99)', type: 'product', time: '2 hr ago' },
  { id: '5', user: 'System', action: 'Campaign "Fall Collection Launch" opened by 28K subscribers', type: 'campaign', time: '3 hr ago' },
  { id: '6', user: 'System', action: 'Low stock alert: Premium Leather Wallet (670 units)', type: 'alert', time: '4 hr ago' },
  { id: '7', user: 'System', action: 'Payment captured: ORD-7839 ($119.98)', type: 'payment', time: '5 hr ago' },
  { id: '8', user: 'Khalid Khan', action: 'Created coupon code: BUNDLE15 (15% off $150+)', type: 'coupon', time: '1 day ago' },
  { id: '9', user: 'System', action: 'Daily analytics report generated', type: 'system', time: '1 day ago' },
  { id: '10', user: 'System', action: 'Abandoned cart recovery sent to 23 customers', type: 'marketing', time: '1 day ago' },
]

// ─── Extended Activity ──────────────────────────────────────

export const MOCK_ACTIVITY_EXTENDED = [
  { id: '11', user: 'Sarah Chen', action: 'Processed 45 orders for East Coast Hub', type: 'fulfillment', time: '1 day ago' },
  { id: '12', user: 'System', action: 'New customer registered: Marcus Reed (marcus@email.com)', type: 'customer', time: '1 day ago' },
  { id: '13', user: 'James Wilson', action: 'Updated campaign: VIP Early Access budget to $1,000', type: 'campaign', time: '2 days ago' },
  { id: '14', user: 'System', action: 'Inventory restock: 2,000 units of Stainless Steel Water Bottle', type: 'inventory', time: '2 days ago' },
  { id: '15', user: 'Emily Park', action: 'Created new customer segment: International Buyers', type: 'segment', time: '2 days ago' },
  { id: '16', user: 'System', action: 'Payment dispute opened: ORD-7825 ($399.99)', type: 'alert', time: '3 days ago' },
  { id: '17', user: 'Marcus Johnson', action: 'Shipped 120 orders from Central Distribution', type: 'fulfillment', time: '3 days ago' },
  { id: '18', user: 'System', action: 'SEO score improved: /products/wireless-pro-headphones (89 → 92)', type: 'system', time: '3 days ago' },
  { id: '19', user: 'Khalid Khan', action: 'Adjusted shipping rates for FedEx Express', type: 'shipping', time: '4 days ago' },
  { id: '20', user: 'System', action: 'Monthly subscription renewed: Scale plan ($199)', type: 'billing', time: '4 days ago' },
]

// ─── Notifications (5 items) ────────────────────────────────

export const MOCK_NOTIFICATIONS = [
  { id: 'n1', title: 'New Order', message: 'Order ORD-7842 received for $284.97', type: 'order', read: false, time: '2 min ago' },
  { id: 'n2', title: 'Low Stock', message: 'Premium Leather Wallet running low (670 left)', type: 'warning', read: false, time: '4 hr ago' },
  { id: 'n3', title: 'Payment Failed', message: 'Order ORD-7834 payment declined', type: 'error', read: false, time: '1 day ago' },
  { id: 'n4', title: 'Review Posted', message: 'New 5-star review on Wireless Pro Headphones', type: 'success', read: true, time: '1 day ago' },
  { id: 'n5', title: 'Campaign Sent', message: 'Fall Collection Launch sent to 45K subscribers', type: 'info', read: true, time: '2 days ago' },
]

// ─── Extended Notifications ─────────────────────────────────

export const MOCK_NOTIFICATIONS_EXTENDED = [
  { id: 'n6', title: 'Order Shipped', message: 'Order ORD-7841 has been shipped via FedEx', type: 'success', read: true, time: '1 hr ago' },
  { id: 'n7', title: 'New Review', message: 'James Lee left a 4-star review on Ergonomic Chair', type: 'info', read: true, time: '2 days ago' },
  { id: 'n8', title: 'Stock Replenished', message: 'Bamboo Cutting Board Set restocked (2,300 units)', type: 'success', read: true, time: '3 days ago' },
  { id: 'n9', title: 'Campaign Complete', message: 'Back to School campaign finished — 380 conversions', type: 'info', read: true, time: '5 days ago' },
  { id: 'n10', title: 'Dispute Resolved', message: 'Chargeback for ORD-7819 resolved in your favor', type: 'success', read: true, time: '1 week ago' },
]

// ─── Team (7 items) ─────────────────────────────────────────

export const MOCK_TEAM = [
  { id: '1', name: 'Khalid Khan', email: 'khalid@marketforge.io', role: 'owner', status: 'active', department: 'Executive' },
  { id: '2', name: 'Sarah Chen', email: 'sarah@marketforge.io', role: 'admin', status: 'active', department: 'Operations' },
  { id: '3', name: 'James Wilson', email: 'james@marketforge.io', role: 'manager', status: 'active', department: 'Marketing' },
  { id: '4', name: 'Emily Park', email: 'emily@marketforge.io', role: 'manager', status: 'active', department: 'Sales' },
  { id: '5', name: 'Marcus Johnson', email: 'marcus@marketforge.io', role: 'member', status: 'active', department: 'Fulfillment' },
  { id: '6', name: 'Olivia Brown', email: 'olivia@marketforge.io', role: 'member', status: 'active', department: 'Support' },
  { id: '7', name: 'David Kim', email: 'david@marketforge.io', role: 'viewer', status: 'inactive', department: 'Finance' },
]

// ─── API Keys (4 items) ─────────────────────────────────────

export const MOCK_API_KEYS = [
  { id: 'k1', name: 'Production Storefront', prefix: 'mf_prod_...x8k2', created: '2026-03-15', lastUsed: '2 min ago', requests: 8900000, status: 'active' },
  { id: 'k2', name: 'Mobile App', prefix: 'mf_app_...m3j9', created: '2026-06-01', lastUsed: '5 min ago', requests: 3400000, status: 'active' },
  { id: 'k3', name: 'Analytics Integration', prefix: 'mf_an_...p5w2', created: '2026-07-15', lastUsed: '1 hr ago', requests: 1200000, status: 'active' },
  { id: 'k4', name: 'Legacy Storefront', prefix: 'mf_leg_...q1r7', created: '2026-01-20', lastUsed: '60 days ago', requests: 45000, status: 'inactive' },
]

// ─── Billing ────────────────────────────────────────────────

export const MOCK_BILLING = {
  currentPlan: { name: 'Scale', price: 199, renewal: '2026-10-01' },
  usage: {
    products: 12,
    orders: 12847,
    storage: 15.6,
    bandwidth: 24.8,
    email: 95000,
    sms: 1200,
  },
  invoices: [
    { id: 'INV-2026-009', amount: 892, status: 'paid', date: '2026-09-01' },
    { id: 'INV-2026-008', amount: 856, status: 'paid', date: '2026-08-01' },
    { id: 'INV-2026-007', amount: 745, status: 'paid', date: '2026-07-01' },
    { id: 'INV-2026-006', amount: 680, status: 'paid', date: '2026-06-01' },
    { id: 'INV-2026-005', amount: 620, status: 'paid', date: '2026-05-01' },
    { id: 'INV-2026-004', amount: 580, status: 'paid', date: '2026-04-01' },
    { id: 'INV-2026-003', amount: 520, status: 'paid', date: '2026-03-01' },
    { id: 'INV-2026-002', amount: 460, status: 'paid', date: '2026-02-01' },
    { id: 'INV-2026-001', amount: 420, status: 'paid', date: '2026-01-01' },
  ],
}

// ─── Taxes (8 items) ────────────────────────────────────────

export const MOCK_TAXES = [
  { id: 't1', region: 'California', rate: 7.25, type: 'State', auto: true },
  { id: 't2', region: 'New York', rate: 8.0, type: 'State', auto: true },
  { id: 't3', region: 'Texas', rate: 6.25, type: 'State', auto: true },
  { id: 't4', region: 'Florida', rate: 6.0, type: 'State', auto: true },
  { id: 't5', region: 'Washington', rate: 6.5, type: 'State', auto: true },
  { id: 't6', region: 'EU (VAT)', rate: 21.0, type: 'VAT', auto: true },
  { id: 't7', region: 'UK (VAT)', rate: 20.0, type: 'VAT', auto: true },
  { id: 't8', region: 'Canada (GST)', rate: 5.0, type: 'GST', auto: true },
]

// ─── Storefront ─────────────────────────────────────────────

export const MOCK_STOREFRONT = {
  theme: 'Modern Dark',
  primaryColor: '#d946ef',
  products: 12,
  collections: 5,
  pages: 8,
  traffic: {
    visitors: 45200,
    pageViews: 128000,
    bounceRate: 38.2,
    avgSession: '4m 32s',
  },
  conversion: {
    visitors: 45200,
    addedToCart: 8900,
    checkout: 4200,
    orders: 1200,
    rate: 2.65,
  },
}

// ─── Email Metrics ──────────────────────────────────────────

export const MOCK_EMAIL = {
  lists: [
    { id: 'el1', name: 'All Subscribers', count: 45200, growth: 8.4, engagement: 42.3 },
    { id: 'el2', name: 'VIP Customers', count: 1240, growth: 12.4, engagement: 68.2 },
    { id: 'el3', name: 'New Customers', count: 3200, growth: 22.1, engagement: 55.8 },
    { id: 'el4', name: 'Cart Abandoners', count: 2340, growth: 3.1, engagement: 38.6 },
    { id: 'el5', name: 'Newsletter', count: 28900, growth: 5.2, engagement: 35.4 },
  ],
  campaigns: [
    { id: 'ec1', name: 'Weekly Newsletter', sent: 28900, opened: 10115, clicked: 2890, unsubscribed: 42, date: '2026-09-15' },
    { id: 'ec2', name: 'Product Announcement', sent: 12400, opened: 6200, clicked: 1860, unsubscribed: 18, date: '2026-09-12' },
    { id: 'ec3', name: 'VIP Exclusive Sale', sent: 1240, opened: 843, clicked: 422, unsubscribed: 2, date: '2026-09-10' },
    { id: 'ec4', name: 'Abandoned Cart #1', sent: 5600, opened: 2800, clicked: 840, unsubscribed: 28, date: '2026-09-08' },
    { id: 'ec5', name: 'Welcome Series', sent: 3200, opened: 2240, clicked: 896, unsubscribed: 8, date: '2026-09-05' },
  ],
  performance: {
    delivered: 285400,
    opened: 114160,
    clicked: 28540,
    bounced: 1427,
    unsubscribed: 285,
    spamReports: 14,
    openRate: 40.0,
    clickRate: 10.0,
    bounceRate: 0.5,
  },
}

// ─── POS Data ───────────────────────────────────────────────

export const MOCK_POS = {
  terminals: [
    { id: 'pos1', name: 'Main Counter', location: 'Store Front', status: 'online', todayOrders: 45, todayRevenue: 3240, lastActive: '2 min ago' },
    { id: 'pos2', name: 'Express Lane', location: 'Store Front', status: 'online', todayOrders: 62, todayRevenue: 2180, lastActive: '5 min ago' },
    { id: 'pos3', name: 'Pop-up Shop', location: 'Mall Kiosk', status: 'offline', todayOrders: 0, todayRevenue: 0, lastActive: '3 days ago' },
    { id: 'pos4', name: 'Warehouse Counter', location: 'East Coast Hub', status: 'online', todayOrders: 8, todayRevenue: 560, lastActive: '15 min ago' },
  ],
  recentTransactions: [
    { id: 'tx1', terminal: 'Main Counter', items: 2, total: 179.98, method: 'Credit Card', time: '3 min ago' },
    { id: 'tx2', terminal: 'Express Lane', items: 1, total: 29.99, method: 'Cash', time: '8 min ago' },
    { id: 'tx3', terminal: 'Express Lane', items: 3, total: 114.97, method: 'Credit Card', time: '12 min ago' },
    { id: 'tx4', terminal: 'Main Counter', items: 4, total: 389.96, method: 'Apple Pay', time: '18 min ago' },
    { id: 'tx5', terminal: 'Express Lane', items: 1, total: 59.99, method: 'Credit Card', time: '22 min ago' },
  ],
  topSelling: [
    { product: 'Stainless Steel Water Bottle', sold: 24, revenue: 599.76 },
    { product: 'Resistance Band Set', sold: 18, revenue: 539.82 },
    { product: 'Wireless Charging Pad', sold: 12, revenue: 479.88 },
    { product: 'Organic Green Tea Set', sold: 15, revenue: 524.85 },
    { product: 'Silk Sleep Mask', sold: 10, revenue: 199.90 },
  ],
}

// ─── Fulfillment Data ───────────────────────────────────────

export const MOCK_FULFILLMENT = {
  overview: {
    unfulfilled: 34,
    partiallyFulfilled: 12,
    fulfilled: 890,
    shipped: 245,
    delivered: 11680,
  },
  warehouses: [
    { id: 'fw1', name: 'East Coast Hub', pending: 18, avgPickTime: '4.2 min', avgPackTime: '3.1 min', dailyCapacity: 800, utilization: 72 },
    { id: 'fw2', name: 'West Coast Hub', pending: 12, avgPickTime: '4.8 min', avgPackTime: '3.4 min', dailyCapacity: 600, utilization: 68 },
    { id: 'fw3', name: 'Central Distribution', pending: 4, avgPickTime: '3.8 min', avgPackTime: '2.9 min', dailyCapacity: 500, utilization: 55 },
    { id: 'fw4', name: 'European Hub', pending: 6, avgPickTime: '5.1 min', avgPackTime: '3.6 min', dailyCapacity: 350, utilization: 62 },
  ],
  carriers: [
    { carrier: 'FedEx Express', shipments: 3400, onTime: 97.2, avgCost: 12.99, avgDays: 1.8 },
    { carrier: 'UPS Ground', shipments: 2800, onTime: 95.8, avgCost: 7.99, avgDays: 3.2 },
    { carrier: 'USPS Priority', shipments: 2100, onTime: 94.1, avgCost: 8.49, avgDays: 2.5 },
    { carrier: 'DHL International', shipments: 890, onTime: 91.5, avgCost: 24.99, avgDays: 7.2 },
  ],
}

// ─── Dashboard KPIs ─────────────────────────────────────────

export const MOCK_KPI = {
  revenue: { value: 892400, change: 14.2, label: 'Total Revenue', period: 'vs last year' },
  orders: { value: 12847, change: 18.7, label: 'Total Orders', period: 'vs last year' },
  customers: { value: 8920, change: 22.3, label: 'Total Customers', period: 'vs last year' },
  conversion: { value: 3.8, change: 0.6, label: 'Conversion Rate', period: 'vs last month' },
  avgOrder: { value: 80.73, change: 5.2, label: 'Avg Order Value', period: 'vs last month' },
  aov: { value: 80.73, change: 5.2, label: 'Avg Order Value', period: 'vs last month' },
  ltv: { value: 342.50, change: 8.1, label: 'Customer LTV', period: 'vs last quarter' },
  churn: { value: 2.4, change: -0.8, label: 'Churn Rate', period: 'vs last month' },
  nps: { value: 72, change: 4, label: 'NPS Score', period: 'vs last quarter' },
  fulfillment: { value: 98.2, change: 1.4, label: 'Fulfillment Rate', period: 'vs last month' },
  shipping: { value: 2.1, change: -0.3, label: 'Avg Ship Days', period: 'vs last month' },
  returns: { value: 2.6, change: -0.4, label: 'Return Rate', period: 'vs last month' },
}

// ─── Inventory Summary ──────────────────────────────────────

export const MOCK_INVENTORY = {
  totalProducts: 20,
  totalStock: 45200,
  lowStock: 3,
  outOfStock: 2,
  totalValue: 1248000,
  categories: [
    { name: 'Electronics', products: 5, stock: 11450, value: 380000 },
    { name: 'Fitness', products: 3, stock: 14800, value: 210000 },
    { name: 'Kitchen', products: 3, stock: 14400, value: 186000 },
    { name: 'Accessories', products: 2, stock: 6870, value: 156000 },
    { name: 'Home', products: 3, stock: 6000, value: 174000 },
    { name: 'Furniture', products: 1, stock: 234, value: 94000 },
    { name: 'Food & Drink', products: 1, stock: 4500, value: 38000 },
    { name: 'Wearables', products: 1, stock: 1200, value: 300000 },
  ],
  movements: [
    { id: 'mv1', product: 'Stainless Steel Water Bottle', type: 'inbound', qty: 2000, warehouse: 'East Coast Hub', date: '2026-09-14' },
    { id: 'mv2', product: 'Wireless Pro Headphones', type: 'outbound', qty: 45, warehouse: 'West Coast Hub', date: '2026-09-15' },
    { id: 'mv3', product: 'Smart Fitness Watch', type: 'transfer', qty: 200, from: 'East Coast Hub', to: 'West Coast Hub', date: '2026-09-14' },
    { id: 'mv4', product: 'Organic Green Tea Set', type: 'inbound', qty: 5000, warehouse: 'Central Distribution', date: '2026-09-13' },
    { id: 'mv5', product: 'Premium Leather Wallet', type: 'outbound', qty: 30, warehouse: 'East Coast Hub', date: '2026-09-15' },
    { id: 'mv6', product: 'USB-C Hub Adapter', type: 'adjustment', qty: -50, warehouse: 'Central Distribution', date: '2026-09-12', reason: 'Damaged' },
    { id: 'mv7', product: 'Yoga Mat Premium', type: 'outbound', qty: 80, warehouse: 'West Coast Hub', date: '2026-09-15' },
    { id: 'mv8', product: 'Bamboo Cutting Board Set', type: 'inbound', qty: 1000, warehouse: 'East Coast Hub', date: '2026-09-11' },
  ],
}

// ─── Collections ────────────────────────────────────────────

export const MOCK_COLLECTIONS = [
  { id: 'col1', name: 'Electronics', products: 5, visibility: 'public', image: '🔌', revenue: 342000 },
  { id: 'col2', name: 'Fitness Essentials', products: 3, visibility: 'public', image: '💪', revenue: 198000 },
  { id: 'col3', name: 'Kitchen Favorites', products: 3, visibility: 'public', image: '🍳', revenue: 156000 },
  { id: 'col4', name: 'Home & Comfort', products: 4, visibility: 'public', image: '🏠', revenue: 108000 },
  { id: 'col5', name: 'Staff Picks', products: 6, visibility: 'hidden', image: '⭐', revenue: 88600 },
]

// ─── Categories ─────────────────────────────────────────────

export const MOCK_CATEGORIES = [
  { id: 'cat1', name: 'Electronics', slug: 'electronics', products: 5, parent: null },
  { id: 'cat2', name: 'Furniture', slug: 'furniture', products: 1, parent: null },
  { id: 'cat3', name: 'Wearables', slug: 'wearables', products: 1, parent: 'Electronics' },
  { id: 'cat4', name: 'Food & Drink', slug: 'food-drink', products: 1, parent: null },
  { id: 'cat5', name: 'Accessories', slug: 'accessories', products: 2, parent: null },
  { id: 'cat6', name: 'Kitchen', slug: 'kitchen', products: 3, parent: null },
  { id: 'cat7', name: 'Fitness', slug: 'fitness', products: 2, parent: null },
  { id: 'cat8', name: 'Home', slug: 'home', products: 2, parent: null },
]

// ─── Loyalty Program ────────────────────────────────────────

export const MOCK_LOYALTY = {
  tiers: [
    { name: 'Bronze', minSpend: 0, members: 4200, benefits: ['1x points', 'Free standard shipping over $50'] },
    { name: 'Silver', minSpend: 500, members: 2800, benefits: ['1.5x points', 'Free standard shipping', 'Early access to sales'] },
    { name: 'Gold', minSpend: 2000, members: 1240, benefits: ['2x points', 'Free express shipping', 'Exclusive products', 'Birthday reward'] },
    { name: 'Platinum', minSpend: 5000, members: 340, benefits: ['3x points', 'Free shipping always', 'Personal shopper', 'VIP events', 'Annual gift'] },
  ],
  pointsIssued: 2840000,
  pointsRedeemed: 1680000,
  avgPointsPerCustomer: 318,
  redemptionRate: 59.1,
}

// ─── Storefront Pages ───────────────────────────────────────

export const MOCK_PAGES = [
  { id: 'pg1', title: 'Home', slug: '/', status: 'published', lastEdited: '2026-09-15', editor: 'Khalid Khan' },
  { id: 'pg2', title: 'About Us', slug: '/about', status: 'published', lastEdited: '2026-08-20', editor: 'Sarah Chen' },
  { id: 'pg3', title: 'Contact', slug: '/contact', status: 'published', lastEdited: '2026-07-10', editor: 'Olivia Brown' },
  { id: 'pg4', title: 'FAQ', slug: '/faq', status: 'published', lastEdited: '2026-08-05', editor: 'Olivia Brown' },
  { id: 'pg5', title: 'Shipping Policy', slug: '/shipping-policy', status: 'published', lastEdited: '2026-06-15', editor: 'Sarah Chen' },
  { id: 'pg6', title: 'Return Policy', slug: '/return-policy', status: 'published', lastEdited: '2026-06-15', editor: 'Sarah Chen' },
  { id: 'pg7', title: 'Privacy Policy', slug: '/privacy', status: 'published', lastEdited: '2026-01-01', editor: 'Khalid Khan' },
  { id: 'pg8', title: 'Terms of Service', slug: '/terms', status: 'published', lastEdited: '2026-01-01', editor: 'Khalid Khan' },
]

// ─── Checkout Funnel by Source ──────────────────────────────

export const MOCK_FUNNEL_BY_SOURCE = [
  {
    source: 'Direct',
    visitors: 16200,
    productViews: 12150,
    addToCart: 3240,
    checkout: 1620,
    orders: 680,
    conversionRate: 4.2,
  },
  {
    source: 'Organic Search',
    visitors: 12800,
    productViews: 9600,
    addToCart: 2560,
    checkout: 1280,
    orders: 420,
    conversionRate: 3.3,
  },
  {
    source: 'Social Media',
    visitors: 8600,
    productViews: 5520,
    addToCart: 1420,
    checkout: 640,
    orders: 180,
    conversionRate: 2.1,
  },
  {
    source: 'Email',
    visitors: 5400,
    productViews: 3780,
    addToCart: 1260,
    checkout: 540,
    orders: 280,
    conversionRate: 5.2,
  },
  {
    source: 'Paid Ads',
    visitors: 2200,
    productViews: 1350,
    addToCart: 420,
    checkout: 120,
    orders: 40,
    conversionRate: 1.8,
  },
]

// ─── Customer Cohorts (monthly retention) ───────────────────

export const MOCK_COHORTS = [
  { cohort: 'Jan 2026', customers: 420, month0: 100, month1: 68, month2: 52, month3: 44, month4: 38, month5: 34, month6: 32, month7: 30, month8: 28 },
  { cohort: 'Feb 2026', customers: 480, month0: 100, month1: 72, month2: 56, month3: 48, month4: 42, month5: 38, month6: 36, month7: 34 },
  { cohort: 'Mar 2026', customers: 520, month0: 100, month1: 70, month2: 54, month3: 46, month4: 40, month5: 36, month6: 34 },
  { cohort: 'Apr 2026', customers: 580, month0: 100, month1: 74, month2: 58, month3: 50, month4: 44, month5: 40 },
  { cohort: 'May 2026', customers: 540, month0: 100, month1: 66, month2: 50, month3: 42, month4: 36 },
  { cohort: 'Jun 2026', customers: 610, month0: 100, month1: 72, month2: 56, month3: 48 },
  { cohort: 'Jul 2026', customers: 680, month0: 100, month1: 76, month2: 60 },
  { cohort: 'Aug 2026', customers: 720, month0: 100, month1: 74 },
  { cohort: 'Sep 2026', customers: 780, month0: 100 },
]

// ─── Search Terms (store search analytics) ──────────────────

export const MOCK_SEARCH_TERMS = [
  { term: 'headphones', searches: 3400, results: 2, conversions: 120, conversionRate: 3.5 },
  { term: 'watch', searches: 2800, results: 1, conversions: 89, conversionRate: 3.2 },
  { term: 'chair', searches: 2200, results: 1, conversions: 45, conversionRate: 2.0 },
  { term: 'speaker', searches: 1900, results: 1, conversions: 78, conversionRate: 4.1 },
  { term: 'tea', searches: 1600, results: 1, conversions: 92, conversionRate: 5.8 },
  { term: 'wallet', searches: 1400, results: 1, conversions: 56, conversionRate: 4.0 },
  { term: 'yoga mat', searches: 1200, results: 1, conversions: 64, conversionRate: 5.3 },
  { term: 'water bottle', searches: 1100, results: 1, conversions: 78, conversionRate: 7.1 },
  { term: 'charging pad', searches: 980, results: 1, conversions: 42, conversionRate: 4.3 },
  { term: 'resistance bands', searches: 870, results: 1, conversions: 56, conversionRate: 6.4 },
  { term: 'cutting board', searches: 760, results: 1, conversions: 34, conversionRate: 4.5 },
  { term: 'pillow', searches: 650, results: 1, conversions: 28, conversionRate: 4.3 },
]

// ─── Abandoned Carts ────────────────────────────────────────

export const MOCK_ABANDONED_CARTS = [
  { id: 'ac1', email: 'visitor_1234@email.com', items: 2, value: 239.98, products: ['Wireless Pro Headphones', 'Organic Green Tea Set'], abandonedAt: '2026-09-15 14:32', recovered: false },
  { id: 'ac2', email: 'visitor_5678@email.com', items: 1, value: 399.99, products: ['Ergonomic Office Chair'], abandonedAt: '2026-09-15 13:15', recovered: false },
  { id: 'ac3', email: 'visitor_9012@email.com', items: 3, value: 324.97, products: ['Smart Fitness Watch', 'Resistance Band Set', 'Stainless Steel Water Bottle'], abandonedAt: '2026-09-15 12:48', recovered: true },
  { id: 'ac4', email: 'visitor_3456@email.com', items: 1, value: 89.99, products: ['Portable Bluetooth Speaker'], abandonedAt: '2026-09-15 11:20', recovered: false },
  { id: 'ac5', email: 'visitor_7890@email.com', items: 2, value: 104.98, products: ['Bamboo Cutting Board Set', 'Wireless Charging Pad'], abandonedAt: '2026-09-15 10:55', recovered: true },
  { id: 'ac6', email: 'visitor_2345@email.com', items: 4, value: 474.96, products: ['Wireless Pro Headphones', 'Smart Fitness Watch', 'Premium Leather Wallet', 'Silk Sleep Mask'], abandonedAt: '2026-09-14 22:10', recovered: false },
  { id: 'ac7', email: 'visitor_6789@email.com', items: 1, value: 59.99, products: ['Yoga Mat Premium'], abandonedAt: '2026-09-14 20:45', recovered: true },
  { id: 'ac8', email: 'visitor_0123@email.com', items: 2, value: 84.98, products: ['Memory Foam Pillow', 'Stainless Steel Water Bottle'], abandonedAt: '2026-09-14 19:30', recovered: false },
]

// ─── Support Tickets ────────────────────────────────────────

export const MOCK_SUPPORT_TICKETS = [
  { id: 'st1', subject: 'Order not received', customer: 'David Kim', status: 'open', priority: 'high', assigned: 'Olivia Brown', created: '2026-09-15', channel: 'email' },
  { id: 'st2', subject: 'Wrong item received', customer: 'Tom Wilson', status: 'open', priority: 'high', assigned: 'Olivia Brown', created: '2026-09-15', channel: 'chat' },
  { id: 'st3', subject: 'Refund request for ORD-7836', customer: 'Lisa Wang', status: 'pending', priority: 'medium', assigned: 'Marcus Johnson', created: '2026-09-14', channel: 'email' },
  { id: 'st4', subject: 'Product quality concern', customer: 'David Kim', status: 'resolved', priority: 'medium', assigned: 'Olivia Brown', created: '2026-09-13', channel: 'phone' },
  { id: 'st5', subject: 'Shipping delay inquiry', customer: 'Rachel Green', status: 'resolved', priority: 'low', assigned: 'Marcus Johnson', created: '2026-09-12', channel: 'email' },
  { id: 'st6', subject: 'Account access issue', customer: 'Priya Patel', status: 'resolved', priority: 'low', assigned: 'Sarah Chen', created: '2026-09-11', channel: 'chat' },
  { id: 'st7', subject: 'Bulk order inquiry', customer: 'Chloe Bennett', status: 'open', priority: 'medium', assigned: 'Emily Park', created: '2026-09-15', channel: 'phone' },
  { id: 'st8', subject: 'Coupon not working', customer: 'Ahmed Hassan', status: 'resolved', priority: 'low', assigned: 'James Wilson', created: '2026-09-10', channel: 'email' },
]

// ─── Currency / Locale Configs ──────────────────────────────

export const MOCK_LOCALES = [
  { code: 'en-US', name: 'English (US)', currency: 'USD', symbol: '$', flag: '🇺🇸' },
  { code: 'en-GB', name: 'English (UK)', currency: 'GBP', symbol: '£', flag: '🇬🇧' },
  { code: 'de-DE', name: 'Deutsch', currency: 'EUR', symbol: '€', flag: '🇩🇪' },
  { code: 'fr-FR', name: 'Français', currency: 'EUR', symbol: '€', flag: '🇫🇷' },
  { code: 'es-ES', name: 'Español', currency: 'EUR', symbol: '€', flag: '🇪🇸' },
  { code: 'ja-JP', name: '日本語', currency: 'JPY', symbol: '¥', flag: '🇯🇵' },
  { code: 'zh-CN', name: '简体中文', currency: 'CNY', symbol: '¥', flag: '🇨🇳' },
  { code: 'ar-SA', name: 'العربية', currency: 'SAR', symbol: '﷼', flag: '🇸🇦' },
]

// ─── Theme Presets ──────────────────────────────────────────

export const MOCK_THEMES = [
  { id: 'th1', name: 'Modern Dark', primary: '#d946ef', bg: '#0f0f0f', card: '#1a1a1a', text: '#f5f5f5', active: true },
  { id: 'th2', name: 'Clean White', primary: '#d946ef', bg: '#ffffff', card: '#f9fafb', text: '#111827', active: false },
  { id: 'th3', name: 'Ocean Blue', primary: '#3b82f6', bg: '#0c1222', card: '#1e293b', text: '#e2e8f0', active: false },
  { id: 'th4', name: 'Forest Green', primary: '#22c55e', bg: '#0a1f0a', card: '#142e14', text: '#e5e7eb', active: false },
  { id: 'th5', name: 'Sunset Orange', primary: '#f59e0b', bg: '#1a1005', card: '#2d1f0a', text: '#fef3c7', active: false },
]

// ─── Webhooks ───────────────────────────────────────────────

export const MOCK_WEBHOOKS = [
  { id: 'wh1', url: 'https://api.store-analytics.com/events', events: ['order.created', 'order.fulfilled'], status: 'active', lastTriggered: '2 min ago', successRate: 99.8 },
  { id: 'wh2', url: 'https://slack.com/api/webhook/abc123', events: ['order.created', 'review.created'], status: 'active', lastTriggered: '2 min ago', successRate: 100 },
  { id: 'wh3', url: 'https://inventory.mysync.io/hook', events: ['product.updated', 'inventory.low'], status: 'active', lastTriggered: '4 hr ago', successRate: 99.2 },
  { id: 'wh4', url: 'https://old-system.example.com/webhook', events: ['order.created'], status: 'inactive', lastTriggered: '30 days ago', successRate: 87.4 },
]

// ─── Discount / Pricing Rules ───────────────────────────────

export const MOCK_PRICING_RULES = [
  { id: 'pr1', name: 'Bulk Discount (10+)', type: 'quantity', condition: 'qty >= 10', discount: 10, active: true },
  { id: 'pr2', name: 'VIP Price Override', type: 'customer_group', condition: 'status == VIP', discount: 15, active: true },
  { id: 'pr3', name: 'Wholesale Pricing', type: 'customer_group', condition: 'status == Wholesale', discount: 25, active: true },
  { id: 'pr4', name: 'Seasonal Clearance', type: 'date_range', condition: '2026-09-01 to 2026-09-30', discount: 20, active: false },
  { id: 'pr5', name: 'First Purchase', type: 'customer_segment', condition: 'orders == 1', discount: 10, active: true },
]

// ─── Integrations ───────────────────────────────────────────

export const MOCK_INTEGRATIONS = [
  { id: 'int1', name: 'Stripe', category: 'Payments', status: 'connected', icon: '💳', lastSync: '2 min ago' },
  { id: 'int2', name: 'PayPal', category: 'Payments', status: 'connected', icon: '💰', lastSync: '5 min ago' },
  { id: 'int3', name: 'ShipStation', category: 'Shipping', status: 'connected', icon: '📦', lastSync: '1 hr ago' },
  { id: 'int4', name: 'Google Analytics', category: 'Analytics', status: 'connected', icon: '📊', lastSync: '30 min ago' },
  { id: 'int5', name: 'Mailchimp', category: 'Email', status: 'connected', icon: '📧', lastSync: '1 hr ago' },
  { id: 'int6', name: 'Slack', category: 'Notifications', status: 'connected', icon: '💬', lastSync: '2 min ago' },
  { id: 'int7', name: 'Zapier', category: 'Automation', status: 'connected', icon: '⚡', lastSync: '15 min ago' },
  { id: 'int8', name: 'QuickBooks', category: 'Accounting', status: 'disconnected', icon: '📑', lastSync: '-' },
  { id: 'int9', name: 'Facebook Shops', category: 'Marketplace', status: 'connected', icon: '🛍️', lastSync: '2 hr ago' },
  { id: 'int10', name: 'TikTok Shop', category: 'Marketplace', status: 'disconnected', icon: '🎵', lastSync: '-' },
]

// ─── Audit Log ──────────────────────────────────────────────

export const MOCK_AUDIT_LOG = [
  { id: 'al1', user: 'Khalid Khan', action: 'Updated shipping rate for FedEx Express', resource: 'Shipping', timestamp: '2026-09-15 10:24', ip: '192.168.1.100' },
  { id: 'al2', user: 'Sarah Chen', action: 'Processed batch fulfillment (45 orders)', resource: 'Orders', timestamp: '2026-09-15 09:15', ip: '10.0.0.42' },
  { id: 'al3', user: 'James Wilson', action: 'Launched campaign: Fall Collection Launch', resource: 'Campaigns', timestamp: '2026-09-14 14:30', ip: '10.0.0.55' },
  { id: 'al4', user: 'Khalid Khan', action: 'Created coupon code: BUNDLE15', resource: 'Coupons', timestamp: '2026-09-14 11:20', ip: '192.168.1.100' },
  { id: 'al5', user: 'Emily Park', action: 'Added new customer segment: International', resource: 'Segments', timestamp: '2026-09-13 16:45', ip: '10.0.0.78' },
  { id: 'al6', user: 'System', action: 'API key regenerated: mf_prod_...x8k2', resource: 'API', timestamp: '2026-09-13 09:00', ip: '-' },
  { id: 'al7', user: 'Marcus Johnson', action: 'Shipped 120 orders from Central Distribution', resource: 'Fulfillment', timestamp: '2026-09-12 15:30', ip: '10.0.0.91' },
  { id: 'al8', user: 'Khalid Khan', action: 'Updated product: Smart Fitness Watch', resource: 'Products', timestamp: '2026-09-12 11:10', ip: '192.168.1.100' },
]

// ─── Export helper ───────────────────────────────────────────

export function getAllMockData() {
  return {
    user: MOCK_USER,
    products: [...MOCK_PRODUCTS, ...MOCK_PRODUCTS_EXTENDED],
    orders: [...MOCK_ORDERS, ...MOCK_ORDERS_EXTENDED],
    customers: [...MOCK_CUSTOMERS, ...MOCK_CUSTOMERS_EXTENDED],
    segments: MOCK_SEGMENTS,
    coupons: [...MOCK_COUPONS, ...MOCK_COUPONS_EXTENDED],
    campaigns: [...MOCK_CAMPAIGNS, ...MOCK_CAMPAIGNS_EXTENDED],
    shipping: MOCK_SHIPPING,
    warehouses: MOCK_WAREHOUSES,
    reviews: [...MOCK_REVIEWS, ...MOCK_REVIEWS_EXTENDED],
    payments: [...MOCK_PAYMENTS, ...MOCK_PAYMENTS_EXTENDED],
    seo: MOCK_SEO,
    seoKeywords: MOCK_SEO_KEYWORDS,
    returnRates: MOCK_RETURN_RATES,
    returnsByMonth: MOCK_RETURNS_BY_MONTH,
    revenue: MOCK_REVENUE,
    revenueByCategory: MOCK_REVENUE_BY_CATEGORY,
    revenueByChannel: MOCK_REVENUE_BY_CHANNEL,
    realtime: MOCK_REALTIME,
    liveVisitors: MOCK_LIVE_VISITORS,
    dailyVisitors: MOCK_DAILY_VISITORS,
    funnel: MOCK_FUNNEL,
    funnelBySource: MOCK_FUNNEL_BY_SOURCE,
    inventoryAlerts: MOCK_INVENTORY_ALERTS,
    activity: [...MOCK_ACTIVITY, ...MOCK_ACTIVITY_EXTENDED],
    notifications: [...MOCK_NOTIFICATIONS, ...MOCK_NOTIFICATIONS_EXTENDED],
    team: MOCK_TEAM,
    apiKeys: MOCK_API_KEYS,
    billing: MOCK_BILLING,
    taxes: MOCK_TAXES,
    storefront: MOCK_STOREFRONT,
    email: MOCK_EMAIL,
    pos: MOCK_POS,
    fulfillment: MOCK_FULFILLMENT,
    kpi: MOCK_KPI,
    inventory: MOCK_INVENTORY,
    collections: MOCK_COLLECTIONS,
    categories: MOCK_CATEGORIES,
    loyalty: MOCK_LOYALTY,
    pages: MOCK_PAGES,
    cohorts: MOCK_COHORTS,
    searchTerms: MOCK_SEARCH_TERMS,
    abandonedCarts: MOCK_ABANDONED_CARTS,
    supportTickets: MOCK_SUPPORT_TICKETS,
    locales: MOCK_LOCALES,
    themes: MOCK_THEMES,
    webhooks: MOCK_WEBHOOKS,
    pricingRules: MOCK_PRICING_RULES,
    integrations: MOCK_INTEGRATIONS,
    auditLog: MOCK_AUDIT_LOG,
  }
}
