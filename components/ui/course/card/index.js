import Image from 'next/image';
import Link from 'next/link';

export default function Card({ course, Footer, disabled }) {
  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='flex  h-full'>
        <div className='flex basis-1/2 h-full'>
          <Image
            className={`object-cover ${disabled && 'filter grayscale'}`}
            src={course.coverImage}
            alt={course.title}
            layout='responsive'
            width='400'
            height='230'
          />
        </div>
        <div className='p-8 basis-1/2'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {course.type}
          </div>
          <Link
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
            href={`/courses/${course.slug}`}
          >
            {course.title}
          </Link>
          <p className='mt-2 text-gray-500'>{course.description}</p>
          {Footer && <Footer />}
        </div>
      </div>
    </div>
  );
}
