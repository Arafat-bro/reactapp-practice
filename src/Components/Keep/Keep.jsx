import React, { useState } from 'react';

import Header from './Header';
import './Keep.css';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const Keep = () => {

    const [Item, setItem] = useState([]);

    const addNote = (note) => {

        setItem((preData) => {
            return [...preData, note];
        });
        
    };

    const deleteNote = (id) => {
        setItem((oldData) => {
            return oldData.filter((curData, ind) => {
                return ind !== id;
            });
        }
    );
};

    return (
        <>
            <Header></Header>
            <CreateNote passNote={addNote}/>
            {
                Item.map((val, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={val.title}
                            content={val.content}
                            deleteItem={deleteNote}
                        />
                    );
                })
            }

            <Footer></Footer>
        </>
    )
}
export default Keep;