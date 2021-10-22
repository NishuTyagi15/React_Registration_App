import React, { useState } from 'react'
import Icons from "../Icons/Icons";
import UserServices from '../../services/UserServices';
import Dialog from '@material-ui/core/Dialog';
import Button from '@mui/material/Button';

const obj = new UserServices();

const Notes = (props) => {

    const [newNote, setNewNote] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const newNotes1 = () => {
        setNewNote(!newNote);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };    

    const handleColor=(data)=>{
        this.setState({
            color:data
        });
    }

    const handleInput = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }
        
    const onUpdate = () => {
        let updateData = {
            noteId: props.index.id,
            title: {title},
            description: {description},
        };
        obj.updateNotes(updateData).then((response) => {
            console.log(response);
            setOpen(false);
        }).catch(error => {
            console.log(error);
            setOpen(false);
        })
    }

    const {classes} = props;

    return (
        <div className="notes" onMouseEnter={newNotes1}>
            <div>
                <Dialog open={open} onClose={handleClose}>
                    <div style={{
                        backgroundColor: props.index.color,
                    }}
                    className="popup"
                    >
                    <p>
                        <input
                            className="input1"
                            name="title"
                            defaultValue={props.index.title}
                            multiline
                            onChange={handleInput}
                            style={{
                                backgroundColor: props.index.color
                            }}
                        />
                        <input
                            className="input2" 
                            name="description"
                            defaultValue={props.index.description}
                            multiline
                            onChange={handleInput}
                            style={{
                                backgroundColor: props.index.color
                            }}
                        />
                    </p>
                    <div className="dialog_icon">
                        <Icons
                            archive={() => {
                                this.onArchive();
                                setOpen(false);
                            }}
                            delete = {() => {
                                this.onDelete();
                                setOpen(false);
                            }}
                            colorval="update"
                            val = {props.index}
                            id= {props.index.id}
                            getColor={handleColor}
                            displayNote={props.displayNote}
                            archiveNotes="archiveUpdate"
                        />
                        <Button className="button" onClick ={onUpdate}>Close</Button>
                    </div>
                    </div>
                </Dialog>
            </div>
            <div className="note1_content" style={{
                backgroundColor: props.index.color,
                }}
            >
                <div onClick={handleClickOpen}>
                <h4 className="head">{props.index.title}</h4>
                <div className="content1">{props.index.description}</div></div>
                <Icons colorval="update"
                val = {props.index}
                id= {props.index.id}
                displayNote={props.displayNote}
                />
            </div>
        </div>
    )
}

export default Notes
