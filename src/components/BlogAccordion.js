// src/components/BlogAccordion.js

import React, { useState } from 'react';
import '../assets/style.css'; // Import the CSS for styling
import Blogimg from '../assets/img/blogs.jpg';
import { Link } from "react-router-dom";
const blogPosts = [
    {
        id: 'slide1',
        title: 'Blog Post 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: Blogimg, // Adjust this path if necessary
    },
    {
        id: 'slide2',
        title: 'Blog Post 2',
        content: 'Vestibulum commodo velit sit amet aliquam bibendum.',
        image: Blogimg, // Adjust this path if necessary
    },
    {
        id: 'slide3',
        title: 'Blog Post 3',
        content: 'Pellentesque habitant morbi tristique senectus et netus.',
        image: Blogimg, // Adjust this path if necessary
    },
    {
        id: 'slide4',
        title: 'Blog Post 4',
        content: 'Nam pretium turpis et arcu bibendum, ut vestibulum leo.',
        image: Blogimg, // Adjust this path if necessary
    },
];

const BlogAccordion = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const moveSlider = (direction) => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + direction;
            if (newIndex < 0) return blogPosts.length - 1;
            if (newIndex >= blogPosts.length) return 0;
            return newIndex;
        });
    };

    return (
        <div className="container-fluid my-5">
            <div className="position-relative">
                <div className="accordion-slider">
                    {blogPosts.map((post, index) => (
                        <div className={`accordion-item ${index === currentIndex ? 'active' : ''}`} id={post.id} key={post.id}>
                            <img src={post.image} alt={`Blog Image ${index + 1}`} />
                            <div className="accordion-content">
                                <h2>{post.title}</h2>
                                <p>{post.content}</p>
                                <Link to="#">Read More →</Link>
                            </div>
                        </div>
                    ))}
                    {/* Previous/Next Buttons */}
                    <div className="prev-blog" onClick={() => moveSlider(-1)}>←</div>
                    <div className="next-blog" onClick={() => moveSlider(1)}>→</div>
                </div>
            </div>
        </div>
    );
};

export default BlogAccordion;
