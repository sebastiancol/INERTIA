import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Edit({ post }) {
    
    const { data, setData, put, errors } = useForm({
        title: post.title,
        content: post.content,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('user_update',user.id));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}
            </div>
            <div>
                <label>Content</label>
                <textarea
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                ></textarea>
                {errors.content && <div>{errors.content}</div>}
            </div>
            
            <button type="submit">Update</button>
        </form>
    );
}