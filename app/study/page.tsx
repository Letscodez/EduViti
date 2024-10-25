import React from 'react';
import Sidebar1 from '../components/sideBar1';


const StudySection: React.FC = () => {
    return (
        <section className="flex bg-bg">
            <Sidebar1 />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-bold">Study Section</h1>
                {/* Add the main content of the study section here */}
            </div>
        </section>
    );
};

export default StudySection;
