import React,{useState} from 'react';

const CreateNote = (props) => {
    // const [title, setTitle] = useState();
    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    const [expand, setExpand] = useState(false);
    const inputChange = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        
        const { name, value } = e.target;

        setNote((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        });
    }

    const passEvent = (e) => {
        e.preventDefault();
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }
    const expandNote = () => {
        return setExpand(true);
    }
    const collapseNote = () => {
        return setExpand(false);
    }
    return (
        <>
            <div className="keep_main">
                <form>
                    {expand ? 
                    <input type="text" placeholder="Title" onChange={inputChange} value={note.title} name='title'></input> : null}

                    {<textarea value={note.content} onChange={inputChange} placeholder="Write a note..." name="content" onClick={expandNote}></textarea>}

                    {expand ? <i onClick={passEvent} className="fa fa-plus"></i> : null}
                    {expand ? <i onClick={collapseNote} className="fa fa-angle-up"></i> : null}
                </form>
            </div>
        </>
    )
}
export default CreateNote;
