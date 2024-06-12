import Image from 'next/image'
import { add } from '@autospace/sample-lib'

export default function Home() {
  return <main>Hello {add(12, 3)}</main>
}
