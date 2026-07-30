// 列出指定簡報的投影片數量與各張的 layout / 標題，用於檢查大綱是否與設計一致。
// 用法：node scripts/count-slides.mjs 2026-08-03-OpenSpec/slides.md
import { readFile } from 'node:fs/promises'
import { parse } from '@slidev/parser'

const file = process.argv[2]
if (!file) {
  console.error('用法：node scripts/count-slides.mjs <path/to/slides.md>')
  process.exit(1)
}

const data = await parse(await readFile(file, 'utf-8'), file)
console.log(`slides: ${data.slides.length}`)
data.slides.forEach((slide, i) => {
  const heading = (slide.content || '').split('\n').find((line) => line.startsWith('#')) ?? ''
  const layout = slide.frontmatter?.layout ?? '-'
  console.log(`${String(i + 1).padStart(2)} | ${layout.padEnd(8)} | ${heading.slice(0, 44)}`)
})
