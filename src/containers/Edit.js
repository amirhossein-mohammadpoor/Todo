import React, { useState } from "react"
import "./Edit.scss"
import { useSelector, connect } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { editTodo } from "../redux/actions"
import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/button"
import { useSpring, animated } from 'react-spring'

const Edit = props => {
  const { id } = useParams()
  const history = useHistory()
  const item = useSelector(state => state.todo.items.find(item => item.id === id))
  const [text, setText] = useState(item.text)
  const [date, setDate] = useState(item.date)
  const editAnime = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 300 }
  })

  const handleText = e => {
    setText(e.target.value)
  }

  const handleDate = e => {
    setDate(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const item = {
      id: id,
      text,
      date,
      done: false
    }
    props.editTodo(item)
    history.push("/")
    let cacheItems = JSON.parse(localStorage.getItem("items"))
    cacheItems = cacheItems.map(cacheItem => cacheItem.id === item.id ? item : cacheItem)
    localStorage.setItem("items", JSON.stringify(cacheItems))
  }
  const handleGoBack = () => {
    history.push("/")
  }

  return (
    <animated.div style={editAnime}>
      <form onSubmit={handleSubmit}>
        <Button onClick={handleGoBack}>بازگشت</Button>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <TextField
            label="کار برای انجام"
            value={text}
            onChange={handleText}
          />
          <TextField
            label="زمان"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={handleDate}
          />
          <Button type="submit">ارسال</Button>
        </Grid>
      </form>
    </animated.div>
  )
}

export default connect(null, { editTodo })(Edit)