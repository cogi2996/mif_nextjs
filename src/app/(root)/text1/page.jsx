"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Post({ content = "Đây là nội dung của bài viết rất dài, dài đến mức bạn cần phải thêm một nút xem thêm để có thể hiển thị đầy đủ nội dung cho người đọc. Đây là nội dung của bài viết rất dài, dài đến mức bạn cần phải thêm một nút xem thêm để có thể hiển thị đầy đủ nội dung cho người đọc", maxLength = 100 }) {
    const [isExpanded, setIsExpanded] = useState(false);

    // Kiểm tra độ dài của bài viết
    const isContentLong = content.length > maxLength;

    // Hàm để toggle giữa xem thêm và thu gọn
    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center">
                <p className="text-gray-800 inline">
                    {isContentLong && !isExpanded ? content.slice(0, maxLength) + "..." : content}
                </p>
                {isContentLong && (
                    <Button
                        variant="link"
                        onClick={toggleContent}
                        className="ml-2 text-blue-600"
                    >
                        {isExpanded ? "Thu gọn" : "Xem thêm"}
                    </Button>
                )}
            </div>
        </div>
    );
}