import Image from 'next/image';
import staticText from '../public/staticText.json';

export default function Home() {
const {fullName} = staticText.author

  return (
    <main>
        <div className='flex justify-center flex-col py-4'>
            <h1 className='text-center text-3xl animation-bounce'>Front-end Developer</h1>
            <div className='mx-auto my-2'>
                <Image
                    src="/avatar.jpeg"
                    alt="Avatar"
                    width={200}
                    height={200}
                    loading='eager'
                    className='rounded-full hover:scale-110 transition-all'
                />
            </div>
            <h2 className='text-center text-2xl'>{fullName}</h2>
        </div>

    </main>
  )
}
