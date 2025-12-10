  import React from "react";
  import style from "./service.module.css";
  import Image from "next/image";
  import imgd from '@/public/img1.webp' 

  export const metadata ={
    title: 'Service Page ',
    description: 'This is my best service page ',
    authors: [{name: 'jahidul islam'}, {name: 'Coding is just my part', url: "something.com"}],
    keywords: ["next js", "react js", "fullstack"]
  }


  export default function service() {
    return (
      <section className="font-roboto">
        <h1 className={style.common_class}>Hello Services</h1>

          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Team
            </h2>

            <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-3 gap-8">
              {/* Team member 1  */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image src="/img1.webp"
                  width={300} 
                  height={500} 
                  alt="img1"
                  className="w-full h-full rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">
                  Jahidul Islam
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Frontend Developer
                </p>
                <p className="text-sm text-gray-600 text-center mt-1">
                  React & Typescript
                </p>
              </div>
              {/* Team member 2  */}
              <div className="bg-white rounded-lg shadow-md  hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-full h-full relative bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Image
                  src={imgd}
                  alt="img1"
                  fill={true} // w full hbe 
                  quality={100}  
                  priority={false}
                  placeholder="blur"
                  blurDataURL=" "
                  />
                </div>
              
              </div>
              {/* Team member 3  */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">TT</span>
                </div>
                <h3 className="text-lg font-semibold text-center">
                  Jaahidul Islamhidul Islam
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Frontend Developer
                </p>
                <p className="text-sm text-gray-600 text-center mt-1">
                  React & Typescript
                </p>
              </div>
              {/* Team member 4  */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">IG</span>
                </div>
                <h3 className="text-lg font-semibold text-center">Ismail</h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  React Developer
                </p>
                <p className="text-sm text-gray-600 text-center mt-1">
                  React & Typescript
                </p>
              </div>
              {/* Team member 5  */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">YA</span>
                </div>
                <h3 className="text-lg font-semibold text-center">
                  Yasin Akter{" "}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Backend Developer
                </p>
                <p className="text-sm text-gray-600 text-center mt-1">
                  Node Mongodb
                </p>
              </div>
              {/* Team member 6  */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">MH</span>
                </div>
                <h3 className="text-lg font-semibold text-center">
                  Modud Hossain{" "}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-2">
                  Flutter Developer
                </p>
                <p className="text-sm text-gray-600 text-center mt-1">Flutter</p>
              </div>
            </div>
          </div>
        </section>

    );
  }
