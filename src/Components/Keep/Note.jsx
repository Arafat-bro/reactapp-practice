import React from 'react';

function Note(props) {
    const deleteNotePass = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
                <h1>{ props.title}</h1>
                <p>{props.content}</p>
                <i className="fa fa-trash" onClick={deleteNotePass}></i>
        </div>
        </>
    );
}
export default Note;