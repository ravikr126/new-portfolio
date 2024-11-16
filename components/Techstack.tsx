import React from 'react';
import { companies } from '@/data';
type Company = {
  id: number;
  name: string;
  img: string;
  nameImg: string;
};

const Techstack = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
      {companies.map((company) => (
        <React.Fragment key={company.id}>
          <div className="flex md:max-w-60 max-w-32 gap-2 group">
            <img
              src={company.img}
              alt={company.name}
              className="md:w-10 w-5 cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:-translate-y-2 group-hover:shadow-2xl"
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Techstack;
