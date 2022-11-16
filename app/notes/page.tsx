import Link from "next/link"
import CreateNote from "./CreateNote";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1', { cache: 'no-store' });

    const data = await res.json();
    return data?.items as any[];
}

export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div className="flex justify-center items-center flex-col">
            <CreateNote />
            <div className="flex flex-row gap-10 flex-wrap justify-center my-10">
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>
        </div>
    );
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};

    return (
        <Link href={`/notes/${id}`}>
            <div className="card w-96 bg-blue-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{content}</p>
                    <p>{created}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>  
        </Link>
    )
}