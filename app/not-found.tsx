import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex justify-center items-center flex-col h-full gap-10'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='border p-5' >Return Home</Link>
    </div>
  )
}