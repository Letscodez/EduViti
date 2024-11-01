'use client';
import BackButton from '@/app/components/backbtn';
import Link from 'next/link';
import { maths } from '@/data/classes/9';

export default function MathsPYQ() {
  // Sample data structure for subjects and their PYQ links
  
  return (
    <main className="p-6">
      <BackButton/>
      <h1 className="text-3xl font-bold text-center text-white mb-8 mt-10">Grade 9 Maths <span className='text-primary'>PYQP's</span></h1>
      <div className="grid grid-cols-2 text-center md:grid-cols-3 lg:grid-cols-4 mt-14 gap-6">
        {maths.pyq.map((link, index) => (
          <Link key={index} href={link.path}>
            <div className="bg-white/10 rounded-lg p-4 border-primary/50 border  text-white hover:shadow-lg hover:scale-105 transform transition duration-200">
              <span className="block text-lg font-medium">{link.name}</span>
              <span className="block text-sm mt-2">View PYQs</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
