import Image from "next/image";
import "./style.css"

const images = [
    'https://thanhnien.mediacdn.vn/Uploaded/phongdt/2022_08_04/spider-man-2363.jpg',
    'https://facts.net/wp-content/uploads/2023/06/37-facts-about-the-movie-titanic-1687656865.jpg',
    'https://i.ytimg.com/vi/xWh0g4rKGjI/maxresdefault.jpg',
    'https://live.staticflickr.com/4005/4686746190_31c292dc8c_b.jpg',
    'https://cdna.artstation.com/p/assets/images/images/017/022/542/large/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg?1554338571',
    'https://townsquare.media/site/442/files/2013/05/man-of-steel-poster-banner.jpg',
    'https://cdnmedia.baotintuc.vn/2017/04/13/13/44/fastfurious.jpg',
    'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/1657909007498-F339J4NXVFU4CAIJRDIE/the%2Bgodfather%2Bthumbnail%2Breal.png',
    'https://i.ytimg.com/vi/UmDVjN7EetM/maxresdefault.jpg',
    'https://cdn.galaxycine.vn/media/2024/6/28/twisters-750_1719558114559.jpg',
    'https://cdn.galaxycine.vn/media/2024/6/28/twisters-750_1719558114559.jpg',
    'https://i.ytimg.com/vi/S1dnnQsY0QU/maxresdefault.jpg',
    'https://i.ytimg.com/vi/TBZrZpGKzI4/maxresdefault.jpg',
]

export default function Background() {
    return (
        <div className="relative w-full h-screen overflow-hidden sm:block hidden">
            <div className="absolute gap-2 rotate-[30deg] scale-[1.6]">
                {Array.from({ length: 4 }).map((_, rowIndex) => (
                    <div key={rowIndex} className="grid grid-cols-7">
                        {Array.from({ length: 7 }).map((_, colIndex) => {
                            const imageIndex = rowIndex * 3 + colIndex;
                            return (
                                <div key={colIndex} className="movie-strip">
                                    <div className="strip-row">
                                        {Array.from({ length: 8 }).map((_, squareIndex) => (
                                            <div key={squareIndex} className="strip-square"></div>
                                        ))}
                                    </div>
                                    <div className="strip-main">
                                        <div className="strip-frame">
                                            <Image
                                                src={images[imageIndex]} // Use dynamic images here
                                                alt={`Movie Frame ${imageIndex}`}
                                                height={152}
                                                width={400}
                                                className="h-[152px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="strip-row">
                                        {Array.from({ length: 8 }).map((_, squareIndex) => (
                                            <div key={squareIndex} className="strip-square"></div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}