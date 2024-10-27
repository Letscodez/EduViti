import Link from 'next/link';

const GridPage = () => {
  const classes = [
    { grade: 'Class 9', href: '/class9' },
    { grade: 'Class 10', href: '/class10' },
    { grade: 'Class 11', href: '/class11' },
    { grade: 'Class 12', href: '/class12' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-4xl font-bold text-primary mb-8">Select Your Class</h1>
      <p className="text-lg text-gray-200 mb-4 text-center max-w-2xl">
        Choose your class below to access study materials, notes, and resources tailored just for you.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="bg-white/20 text-white rounded-xl p-6 hover:scale-105 shadow-lg border-1 border-primary"
          >
            <Link href={cls.href}>
              <div className="text-lg font-semibold text-center">{cls.grade}</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href='/' className="text-sm text-gray-300">Looking for more resources? Explore our platform for additional materials!</a>
      </div>
    </div>
  );
};

export default GridPage;
