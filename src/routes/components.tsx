import { createFileRoute } from '@tanstack/react-router'
import ThemesPage from '../App'

export const Route = createFileRoute('/components')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ThemesPage tab="components"/>
}
