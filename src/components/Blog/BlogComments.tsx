"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import CommentsForm from "./CommentsForm";
import Image from "next/image";
import { DoctorBlogAPI } from "@/services/api";

import userImg1 from "../../../public/images/authors/author1.jpg";

interface BlogCommentsProps {
  articleIdOrSlug: number | string;
}

const BlogComments: React.FC<BlogCommentsProps> = ({ articleIdOrSlug }) => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const data = await DoctorBlogAPI.getArticleComments(articleIdOrSlug);
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
        setComments([]);
      } finally {
        setLoading(false);
      }
    };

    if (articleIdOrSlug) {
      fetchComments();
    }
  }, [articleIdOrSlug]);

  const handleCommentAdded = (newComment: any) => {
    setComments([...comments, newComment]);
  };
  return (
    <>
      <div className="comments-area">
        <h3 className="comments-title">
          {comments.length} {comments.length === 1 ? "Comment" : "Comments"}:
        </h3>

        {loading ? (
          <p>Loading comments...</p>
        ) : comments.length > 0 ? (
          <ol className="comment-list">
            {comments.map((comment) => (
              <li key={comment.id} className="comment">
                <article className="comment-body">
                  <footer className="comment-meta">
                    <div className="comment-author vcard">
                      <Image
                        src={userImg1}
                        className="avatar"
                        alt={comment.author_name}
                        width={150}
                        height={150}
                      />
                      <b className="fn">{comment.author_name}</b>
                      <span className="says">says:</span>
                    </div>

                    <div className="comment-metadata">
                      {new Date(comment.created_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </footer>

                  <div className="comment-content">
                    <p>{comment.content}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}

        {/* CommentsForm */}
        <CommentsForm articleIdOrSlug={articleIdOrSlug} onCommentAdded={handleCommentAdded} />
      </div>
    </>
  );
};

export default BlogComments;
