import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image width="500" height={"500"} src="/next.svg"  alt="hi" />
      <h2>Ahmer is is</h2>
    </main>
  )
}
