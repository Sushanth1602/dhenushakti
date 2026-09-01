import { GovernmentExplorer } from '@/components/government-explorer'

export default async function StatePage({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params
  const label = state.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return <GovernmentExplorer initialState={label} />
}
