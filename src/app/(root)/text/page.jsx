// import Image from "next/image";
// import "./style.css"


// const images = [
//     'https://thanhnien.mediacdn.vn/Uploaded/phongdt/2022_08_04/spider-man-2363.jpg',
//     'https://facts.net/wp-content/uploads/2023/06/37-facts-about-the-movie-titanic-1687656865.jpg',
//     'https://i.ytimg.com/vi/xWh0g4rKGjI/maxresdefault.jpg',
//     'https://live.staticflickr.com/4005/4686746190_31c292dc8c_b.jpg',
//     'https://cdna.artstation.com/p/assets/images/images/017/022/542/large/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg?1554338571',
//     'https://townsquare.media/site/442/files/2013/05/man-of-steel-poster-banner.jpg',
//     'https://cdnmedia.baotintuc.vn/2017/04/13/13/44/fastfurious.jpg',
//     'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1657909007498-F339J4NXVFU4CAIJRDIE/the%2Bgodfather%2Bthumbnail%2Breal.png',
//     'https://i.ytimg.com/vi/UmDVjN7EetM/maxresdefault.jpg',
//     'https://cdn.galaxycine.vn/media/2024/6/28/twisters-750_1719558114559.jpg',
//     'https://i.ytimg.com/vi/S1dnnQsY0QU/maxresdefault.jpg',
//     'https://i.ytimg.com/vi/TBZrZpGKzI4/maxresdefault.jpg',
// ]



// export default function FilmStrip() {
//     return (
//         <div className="grid gap-2 rotate-[30deg]">
//             {Array.from({ length: 4 }).map((_, rowIndex) => (
//                 <div key={rowIndex} className="grid grid-cols-4">
//                     {Array.from({ length: 4 }).map((_, colIndex) => {
//                         const imageIndex = rowIndex * 3 + colIndex;
//                         return (
//                             <div key={colIndex} className="film-strip">
//                                 <div className="strip-row">
//                                     {Array.from({ length: 7 }).map((_, squareIndex) => (
//                                         <div key={squareIndex} className="strip-square"></div>
//                                     ))}
//                                 </div>
//                                 <div className="strip-main">
//                                     <div className="strip-frame">
//                                         <Image
//                                             src={images[imageIndex]} // Use dynamic images here
//                                             alt={`Film Frame ${imageIndex}`}
//                                             height={152}
//                                             width={400}
//                                             className="h-[152px]"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="strip-row">
//                                     {Array.from({ length: 7 }).map((_, squareIndex) => (
//                                         <div key={squareIndex} className="strip-square"></div>
//                                     ))}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             ))}
//         </div>
//     );
// }

'use client'
import React, { useState } from 'react';
import MultipleSelector from '@/components/ui/multiple-selector';

const OPTIONS = [
    { label: 'nextjs', value: 'nextjs' },
    { label: 'React', value: 'react' },
    { label: 'Remix', value: 'remix' },
    { label: 'Vite', value: 'vite' },
    { label: 'Nuxt', value: 'nuxt' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Angular', value: 'angular' },
    { label: 'Ember', value: 'ember', disable: true },
    { label: 'Gatsby', value: 'gatsby', disable: true },
    { label: 'Astro', value: 'astro' },
];

const MultipleSelectorCreatable = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (newOptions) => {
        setSelectedOptions(newOptions);
    };

    return (
        <div className="w-full px-10">
            <MultipleSelector
                defaultOptions={OPTIONS}
                placeholder="Type something that does not exist in dropdowns..."
                creatable
                emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                    </p>
                }
                onChange={handleChange}
                value={selectedOptions}
            />
            <div className="mt-4">
                <h3>Selected Options:</h3>
                <ul>
                    {selectedOptions.map((option) => (
                        <li key={option.value}>{option.label}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MultipleSelectorCreatable;
