import React from "react"
import "./Item.scss"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { deleteTodo, checkTodo } from "../redux/actions"
import Card from '@material-ui/core/Card'
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Checkbox from "@material-ui/core/Checkbox"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { useSpring, animated } from 'react-spring'

const Item = ({ text, date, id, deleteTodo, checkTodo, index }) => {
  const history = useHistory()
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 200 },
    delay: 200 * index
  })

  const handleEditTodo = () => {
    history.push(`/edit/${id}`)
  }
  const handleDeleteTodo = id => {
    deleteTodo(id)
    let cacheItems = JSON.parse(localStorage.getItem("items"))
    cacheItems = cacheItems.filter(cacheItem => cacheItem.id !== id)
    localStorage.setItem("items", JSON.stringify(cacheItems))
  }
  const handleChecked = (id, checked) => {
    checkTodo(id, checked)
  }

  return (
    <animated.div style={props}>
      <Card>
        <CardContent>
          <Grid container direction="row" justify="space-between">
            <Typography>
              {text}
            </Typography>
            <Typography>
              {date}
            </Typography>
          </Grid>
          <Button onClick={() => handleEditTodo(id)}>ویرایش</Button>
          <Button onClick={() => handleDeleteTodo(id)}>پاک کردن </Button>
          <Checkbox onChange={e => handleChecked(id, e.target.checked)} />
        </CardContent>
      </Card>
    </animated.div>
  )
}

export default connect(null, { deleteTodo, checkTodo })(Item)