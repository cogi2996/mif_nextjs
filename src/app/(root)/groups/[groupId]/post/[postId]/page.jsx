"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Post, { PostSkeleton } from "@/components/post";
import { Input } from "@/components/ui/input";
import { Ellipsis, MessageCircle, Play, Send } from "lucide-react";
import { useParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import Comment from "@/components/comment";

export default function DetailPost() {
    const { postId } = useParams();

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
                    content: "Comment 4 comment này dài ơi là dài khiến bạn phải thấy nó dài, vẫn chưa đủ dài nó vẫn quá ngắn, Comment 4 comment này dài ơi là dài khiến bạn phải thấy nó dài, vẫn chưa đủ dài nó vẫn quá ngắn,Comment 4 comment này dài ơi là dài khiến bạn phải thấy nó dài, vẫn chưa đủ dài nó vẫn quá ngắn",
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
        return comments.map((comment, index) => (
            <div key={comment.id} className={`${level === 1 ? 'relative' : 'ml-8 relative'}`}>
                {/* Straight line from parent element to first child element */}
                {comment?.replies?.length && (
                    <div
                        className={`absolute h-full border-l-2 border-s-muted left-4 top-12`}
                        style={{
                            height: 'calc(100% - 50px)',
                        }}
                    ></div>
                )}
                {level > 1 && (
                    <div
                        className={`absolute h-full border-t-2 w-4 -left-4 top-4 z-10 border-l-2 border-t-muted 
                            ${index === (comments.length - 1) ? "border-s-card" : "border-s-muted"}`} // Extend the line to the last element of the parent element
                        style={{
                            height: 'calc(100% - 20px)',
                        }}
                    ></div>
                )}
                <Comment comment={comment} setReplyTo={setReplyTo} replyTo={replyTo} />
                {replyTo === comment.id && (
                    <div className="my-2 ml-8 flex items-start gap-4 z-10">
                        <Input
                            placeholder="Nhập bình luận..."
                            className="h-auto resize-none overflow-hidden"
                        />
                        <Button size="icon" onClick={() => handleReply(comment.id, replyContent, level)}>
                            <Send className='w-4 h-4' />
                            <span className="sr-only">Send</span>
                        </Button>
                    </div>
                )}
                {comment.replies && renderComments(comment.replies, level + 1)}
            </div>
        ));
    };
    return (
        <div className="w-full max-w-3xl mx-auto shadow-xl mb-12 rounded-lg	bg-card">
            <PostSkeleton className="drop-shadow-none" />
            <div className="flex items-center gap-2 px-2 mt-4">
                <Textarea
                    placeholder="Nhập bình luận..."
                    rows={1}
                    className="h-auto resize-none overflow-hidden"
                />
                <Button size="icon">
                    <Send className='w-4 h-4' />
                    <span className="sr-only">Send</span>
                </Button>
            </div>
            <div>
                <div className="space-y-1 mx-2 bg-inherit mt-4">{renderComments(comments)}</div>
            </div>
        </div>
    );
}
