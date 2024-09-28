import { Bookmark, BookMarked } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function CardNew() {
    return (
        <div className="flex items-center w-full">
            <div className="flex items-center gap-2">
                <Image
                    src="https://i1-dulich.vnecdn.net/2021/07/16/1-1626437591.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=BWzFqMmUWVFC1OfpPSUqMA"
                    alt="Movie"
                    width='90'
                    height='200'
                    className="rounded-lg object-cover"
                />
                <div className="grid gap-0.5">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 ">Avengers: Endgame </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">Anthony Edward Stark, thường được gọi là Tony Stark, là một nhân vật hư cấu do Robert Downey Jr. thủ vai trong nhượng quyền điện ảnh Vũ trụ Điện ảnh Marvel (MCU), dựa trên nhân vật truyện tranh cùng tên của Marvel Comics và thường được biết đến với bản ngã Người Sắt. Trong các phim điện ảnh, Tony Stark là một nhà tư bản công nghiệp, nhà phát minh thiên tài và tay chơi cừ khôi, kiêm giữ chức vụ CEO của tập đoàn Stark Industries. Vào giai đoạn đầu của loạt phim, anh là nhà sản xuất vũ khí cho quân đội Hoa Kỳ, cho đến khi anh thay đổi trái tim và chuyển kiến thức kĩ thuật của mình để tạo một bộ giáp siêu năng lực.</p>
                </div>
            </div>
        </div>
    )
}