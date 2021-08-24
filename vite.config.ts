import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import react from 'vite-preset-react'

export default defineConfig({
	plugins: [react(), ViteAliases()],
	resolve: {}
})
