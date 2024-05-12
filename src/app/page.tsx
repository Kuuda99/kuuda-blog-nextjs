//　src/app/page.tsx

import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>ここはトップページです。</h1>
      <Link href='/blog'>記事一覧へ</Link>
    </main>
  )
}