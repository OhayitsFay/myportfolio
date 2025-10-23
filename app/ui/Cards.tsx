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
    <div className="bg-[#fffff1] w-100% shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <Image
        src={image}
        alt={title}
        width={700}
        height={450}
        className="w-100%  object-cover"
      />
      <div className="p-5 text-left">
        <h3 className="font-semibold text-4xl mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-900 mb-4 text-3xl">{description}</p>
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