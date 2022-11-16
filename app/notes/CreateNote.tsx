'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const router = useRouter();

    const create = async () => {
        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title, 
                content
            })
        });

        setContent('');
        setTitle('');

        router.refresh();
    }

    return (
        
        <form className='flex flex-col gap-6' onSubmit={create}>
            <h3 className='text-center'>Create a new Note</h3>
            <input 
                className='input input-bordered input-secondary w-full max-w-xs bg-white'
                type="`text`"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                className='textarea bg-white textarea-secondary'
                placeholder='Content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button className="btn gap-2" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            create note
            </button>
        </form>
    );
}