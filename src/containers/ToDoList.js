import React from "react"
import "./ToDoList.scss"
import Item from "../components/Item"
import { useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from "@material-ui/core/Button"
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  createButton: {
    marginBottom: "10px"
  },
  checkedCard: {
    background: "linear-gradient(to right, lime , green)"
  },
  notCheckedCard: {
    background: "linear-gradient(to right, white , silver)"
  }
})

const ToDoList = props => {
  const history = useHistory()
  const items = useSelector(state => state.todo.items)
  const doneItems = useSelector(state => state.todo.doneItems)
  const classes = useStyle()

  const handleCreateTodo = () => {
    history.push("/create")
  }
  return (
    <>
      <Button onClick={handleCreateTodo} className={classes.createButton}>ایجاد</Button>
      <Grid container spacing={2}>
        {
          items.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
                key={item.id}
                className={doneItems.includes(item.id) ?
                  classes.checkedCard
                  : 
                  classes.notCheckedCard}>
                <Item
                  index={index}
                  id={item.id}
                  text={item.text}
                  date={item.date}
                  done={item.done}
                />
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}

export default ToDoList