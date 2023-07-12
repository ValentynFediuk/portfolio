import Image from 'next/image';
import staticText from '../public/staticText.json';

export default function Home() {
const {fullName} = staticText.author

  return (
    <main>
        <div className='flex justify-center flex-col'>
            <div className='mx-auto'>
                <Image
                    src="/avatar.jpeg"
                    alt="Avatar"
                    width={200}
                    height={200}
                    loading='eager'
                    className='rounded-full'
                />
            </div>
            <h1 className='text-center'>{fullName}</h1>
        </div>

    </main>
  )
}
