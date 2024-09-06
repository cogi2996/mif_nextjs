"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Posts from "@/components/posts";
import { Input } from "@/components/ui/input";
import { MessageCircle, Play } from "lucide-react";

export default function CommentSection() {
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "quietpillsx",
            content: "Comment 1",
            timestamp: "8h ago",
            upvotes: 6,
            replies: [
                {
                    id: 2,
                    author: "Nerdy_Chick_6868",
                    content: "Comment 2",
                    timestamp: "8h ago",
                    upvotes: 1,
                    replies: [
                        {
                            id: 3,
                            author: "quietpillsx",
                            content: "Comment 3",
                            timestamp: "8h ago",
                            upvotes: 2,
                            replies: [
                                {
                                    id: 4,
                                    author: "Nerdy_Chick_6868",
                                    content: "Comment 4",
                                    timestamp: "8h ago",
                                    upvotes: 1,
                                    replies: [
                                        {
                                            id: 8,
                                            author: "Nerdy_Chick_6868",
                                            content: "Comment 4",
                                            timestamp: "8h ago",
                                            upvotes: 1,
                                            replies: [
                                                {
                                                    id: 9,
                                                    author: "Nerdy_Chick_6868",
                                                    content: "Comment 4 comment này dài ơi là dài khiến bạn phải thấy nó dài, vẫn chưa đủ dài nó vẫn quá ngắn",
                                                    timestamp: "8h ago",
                                                    upvotes: 1,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 5,
                    author: "Nerdy_Chick_6868",
                    content: "Comment 5",
                    timestamp: "8h ago",
                    upvotes: 1,
                    replies: [
                        {
                            id: 6,
                            author: "quietpillsx",
                            content: "Comment 6",
                            timestamp: "8h ago",
                            upvotes: 2,
                            replies: [
                                {
                                    id: 7,
                                    author: "Nerdy_Chick_6868",
                                    content: "Comment 7",
                                    timestamp: "8h ago",
                                    upvotes: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);

    const [replyContent, setReplyContent] = useState("");
    const [replyTo, setReplyTo] = useState(null);

    const handleReply = (parentCommentId, replyContent, level = 1) => {
        const addReply = (comments, parentCommentId, newReply) => {
            return comments.map((comment) => {
                if (comment.id === parentCommentId) {
                    return {
                        ...comment,
                        replies: [...(comment.replies || []), newReply],
                    };
                } else if (comment.replies) {
                    return {
                        ...comment,
                        replies: addReply(comment.replies, parentCommentId, newReply),
                    };
                }
                return comment;
            });
        };

        const newReply = {
            id: Date.now(),
            author: "You",
            content: replyContent,
            timestamp: "Just now",
            upvotes: 0,
            replies: [],
        };

        setComments(addReply(comments, parentCommentId, newReply));
        setReplyContent("");
        setReplyTo(null);
    };
    const renderComments = (comments, level = 1) => {
        return comments.map((comment) => (
            <div key={comment.id} className={`${level == 1 ? '' : 'ml-8 relative'}`}>
                {level > 1 && (
                    <div className="absolute -top-16 -left-4 h-full border-l-2 border-muted"
                        style={{
                            height: 'calc(100% + 50px)',
                        }}
                    ></div>
                )}
                <div className='grid gap-1 '>
                    <div className='flex gap-2 items-center'>
                        <Avatar className="w-8 h-8 flex items-center justify-center object-contain">
                            <AvatarImage src="https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="@shadcn" />
                            <AvatarFallback className="flex items-center justify-center">T</AvatarFallback>
                        </Avatar>
                        <p className='font-bold'>{comment.author} &middot;</p>
                        <p className='text-xs text-muted-foreground'>{comment.timestamp}</p>
                    </div>
                    <p className="ml-10 text-sm">{comment.content}</p>
                    <div className="ml-4 flex items-center text-sm">
                        <Button variant="ghost rounded-full	" className="size-12">
                            <Play className='-rotate-90 ' strokeWidth={1.5} size={16} />
                        </Button>
                        200
                        <Button variant="ghost rounded-full">
                            <Play className='rotate-90 text-indigo-600 fill-indigo-600' strokeWidth={1.5} size={16} />
                        </Button>
                        <Button variant="ghost" className="gap-1 items-center rounded-full text-sm" onClick={() => setReplyTo(comment.id)}>
                            <MessageCircle size={16} />
                            Phản hồi
                        </Button>
                    </div>
                </div>
                {
                    replyTo === comment.id && (
                        <div className="my-2 ml-8 flex items-start gap-4 z-10">
                            <Input
                                value={replyContent}
                                onChange={(e) => setReplyContent(e.target.value)}
                                placeholder="Write your reply..."
                                className="flex-1"
                            />
                            <Button onClick={() => handleReply(comment.id, replyContent, level)}>Reply</Button>
                        </div>
                    )
                }
                {comment.replies && renderComments(comment.replies, level + 1)}
            </div >
        ));
    };
    return (
        <div className="w-full max-w-3xl mx-auto shadow-xl mb-12 rounded-lg	bg-card">
            <Posts className="drop-shadow-none" />
            <Input className='mt-4' />
            <div className="space-y-1 mx-2 bg-inherit mt-4">{renderComments(comments)}</div>
        </div>
    );
}
