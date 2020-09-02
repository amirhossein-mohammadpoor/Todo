import React, { useState } from "react"
import "./Create.scss"
import { connect } from "react-redux"
import { addTodo } from "../redux/actions"
import { useHistory } from "react-router-dom"
import TextField from '@material-ui/core/TextField'
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/button"

const Create = props => {
  const history = useHistory()

  const [text, setText] = useState("")
  const [date, setDate] = useState("")

  const handleText = e => {
    setText(e.target.value)
  }

  const handleDate = e => {
    setDate(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.addTodo({
      id: ((100000 * Math.random()) | 0) + "",
      text,
      date,
      done: false
    })
    history.push("/")
    const cacheItems = JSON.parse(localStorage.getItem("items"))
    cacheItems.push({
      id: ((100000 * Math.random()) | 0) + "",
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
  )
}

export default connect(null, { addTodo })(Create)