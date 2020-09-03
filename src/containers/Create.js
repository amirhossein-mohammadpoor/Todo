import React, { useState } from "react"
import "./Create.scss"
import { connect } from "react-redux"
import { addTodo } from "../redux/actions"
import { useHistory } from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/button"
import { v4 as uuidv4 } from 'uuid'
import { useSpring, animated } from 'react-spring'

const Create = props => {
  const history = useHistory()
  const [text, setText] = useState("")
  const [date, setDate] = useState("")
  const createAnime = useSpring({
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
    props.addTodo({
      id: uuidv4(),
      text,
      date,
      done: false
    })
    history.push("/")
    const cacheItems = JSON.parse(localStorage.getItem("items"))
    cacheItems.push({
      id: uuidv4(),
      text,
      date,
      done: false
    })
    localStorage.setItem("items", JSON.stringify(cacheItems))
  }
  const handleGoBack = () => {
    history.push("/")
  }

  return (
    <animated.div style={createAnime}>
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

export default connect(null, { addTodo })(Create)