import React, { useState } from 'react';
import styles from './PostComments.module.css';

const PostComments = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div>
            <ul className={styles.postComments}>
                {comments.map((comment, index) => (
                    <li 
                        key={index}
                        data-testid="comment-item"
                    >
                        <p>{comment}</p>
                    </li>
                ))}
            </ul>

            <form 
                className={styles.postCommentsForm}
                onSubmit={handleSubmit}
            >
                <textarea
                    className={styles.postCommentsFormTextarea}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Digite seu comentário..."
                    required
                    data-testid="comment-textarea"
                />
                <button 
                    type="submit"
                    className={styles.postCommentsFormButton}
                    data-testid="comment-button"
                >
                    Comentar
                </button>
            </form>
        </div>
    );
};

export default PostComments;