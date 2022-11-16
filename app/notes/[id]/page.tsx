async function getNote(noteId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`, {
            next: { revalidate: 10 }
        }
    );
    const data = await res.json();
    return data;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);
    return (
        <div className="w-screen flex flex-col justify-center items-center">
            <div className="card w-96 bg-blue-300 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{note.title}</h2>
                    <p>{note.content}</p>
                    <p>{note.created}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>  
        </div>
    );
}

