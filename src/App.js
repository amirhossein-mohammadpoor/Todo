import React, { Suspense } from 'react'
import "./App.scss"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ToDoList from "./containers/ToDoList"
import { ThemeProvider } from "@material-ui/core/styles"
import CircularProgress from '@material-ui/core/CircularProgress'
import theme from "./themes/theme"

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={ToDoList} />
          <Route exact path="/create" render={() => {
            return (
              
            )
          }} />
          <Route exact path="/edit/:id" render={() => {
            return (
              
            )
          }} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
