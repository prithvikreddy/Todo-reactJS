import React, { useState } from "react";
import "./Todo.css";
import {
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  Avatar,
  Button,
  Modal,
} from "@material-ui/core";
import db from "./firebase";
// import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";
import Deadline from "./Deadline";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  console.log(props.todo.todo);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(props.todo.todo);

  const updateTodo = () => {
    db.collection("todo").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am modal</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update todo</Button>
        </div>
      </Modal>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <imageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary={<Deadline />} />
        </ListItem>
        <Button onClick={(e) => setOpen(true)}>Edit</Button>
        <DeleteForeverIcon
          onClick={(e) => db.collection("todo").doc(props.todo.id).delete()}
        />
      </List>
    </>
  );
}

export default Todo;
