import { createFileRoute } from '@tanstack/react-router'
import ThemesPage from '../App'

import * as z from 'zod'

const indexSearchSchema = z.object({
    tab: z.string().optional(),
})

export const Route = createFileRoute('/')({
    component: RouteComponent,
    validateSearch: indexSearchSchema,
})

function RouteComponent() {
  return <ThemesPage tab='example'/>
}
