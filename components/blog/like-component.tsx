'use client'
import axios from 'axios'
import { Heart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const LikeComponent = ({ id }: { id: string }) => {
    const [like, setLike] = useState(false);
    const [showText, setShowText] = useState(false); // State to control the visibility of the +1 text

    useEffect(() => {
        if (localStorage.getItem(`liked_${id}`)) {
            setLike(true);
        }
    }, [id]);

    const handleLikeClick = async () => {
        if (like) {
            setLike(false);
            await axios.get(`/api/blog/like/${id}?dislike=true`)
            localStorage.removeItem(`liked_${id}`);
        } else {
            setLike(true);
            localStorage.setItem(`liked_${id}`, 'true');
            await axios.get(`/api/blog/like/${id}`)
            setShowText(true);
            setTimeout(() => {
                setShowText(false);
            }, 1500);
        }
    };

    return (
        <div className="like-container">
            <Heart
                fill={like ? '#ff0a78' : 'white'}
                size={80}
                stroke='none'
                onClick={handleLikeClick}
            />
            {showText && <div className="like-text">+1</div>} {/* Render +1 text when showText is true */}
        </div>
    );
};

export default LikeComponent;
