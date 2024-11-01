'use client';
import BackButton from '@/app/components/backbtn';
import Link from 'next/link';
import { maths } from '@/data/classes/12';

export default function Grade12MathsPYQP() {
  // Sample data structure for subjects and their PYQ links
  
  return (
    <main className="p-6">
      <BackButton/>
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-8 mt-10">Grade 12 <span className='text-primary'>Maths</span> PYQP's</h1>
      <div className="grid grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-4 mt-14 gap-6">
        {maths.pyqp.map((link, index) => (
          <Link key={index} href={link.path}>
            <div className="bg-white/10 rounded-lg p-4 border-primary/50 border  text-white hover:shadow-lg hover:scale-105 transform transition duration-200">
              <span className="block text-lg font-medium">{link.name}</span>
              <span className="block text-sm mt-2">View PYQPs</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
