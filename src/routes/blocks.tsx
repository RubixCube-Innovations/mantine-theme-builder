import { createFileRoute } from '@tanstack/react-router'
import BlockPage from '../feature/blocks/components/block-page/block-page'

export const Route = createFileRoute('/blocks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BlockPage />
}
