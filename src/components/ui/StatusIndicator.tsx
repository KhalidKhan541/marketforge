import { cn } from '@/lib/utils'
const cfg = { running: { c: 'bg-emerald-500', p: true }, stopped: { c: 'bg-gray-400', p: false }, active: { c: 'bg-emerald-500', p: true }, processing: { c: 'bg-blue-500', p: true }, shipped: { c: 'bg-forge-500', p: true }, delivered: { c: 'bg-emerald-500', p: false }, cancelled: { c: 'bg-red-500', p: false }, returned: { c: 'bg-amber-500', p: true }, pending: { c: 'bg-amber-500', p: true }, draft: { c: 'bg-gray-400', p: false }, failed: { c: 'bg-red-500', p: false }, refunded: { c: 'bg-orange-500', p: false } } as const
export default function StatusIndicator({ status, showLabel = true }: { status: keyof typeof cfg; showLabel?: boolean }) {
  const c = cfg[status] || cfg.pending
  return <span className="inline-flex items-center gap-1.5"><span className={cn('w-2 h-2 rounded-full', c.c, c.p && 'animate-pulse')} />{showLabel && <span className="text-xs font-medium text-gray-600 dark:text-gray-400 capitalize">{status}</span>}</span>
}
