import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function Cards({ title, description, link, image }: CardProps) {
  return (
    <div className="bg-[#fffff1] shadow-md rounded-lg flex flex-col items-center justify-center text-center w-full overflow-hidden hover:shadow-lg transition-all duration-300 ">
      <Image
        src={image}
        alt={title}
        width={700}
        height={450}
        className="rounded-md w-full object-cover mb-4"
      />
      <div className="p-5 px-20 text-left">
        <h3 className="font-semibold text-4xl mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-900 mt-2 mb-4 text-2xl">{description}</p>
        <Link
          href={link}
          className="text-blue-600 font-medium hover:underline"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}