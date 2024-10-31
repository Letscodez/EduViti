import Image from 'next/image';

export default function SuggestedBooksPage() {
  // Sample data structure for book information
  const books = [
    {
      title: 'RD Sharma',
      thumbnail: '/images/math_book_thumbnail.jpg',
      link: 'https://example.com/math-book',
    },
    {
      title: 'RS Aggarwal',
      thumbnail: '/images/science_book_thumbnail.jpg',
      link: 'https://example.com/science-book',
    },
    {
      title: 'Pearson',
      thumbnail: '/images/english_book_thumbnail.jpg',
      link: 'https://example.com/english-book',
    },
    // Add more books here as needed
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-white mb-8 mt-10 ">Grade 9 Extra Books & Solutions</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-8 ">
        {books.map((book, index) => (
          <a
            key={index}
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-lg p-4 text-white w-40 hover:shadow-lg hover:scale-105 transform transition duration-200"
          >
            <Image
              src={book.thumbnail}
              alt={book.title}
              width={120}
              height={160}
              className="rounded-md mb-4"
            />
            <span className="block text-sm font-medium">{book.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
