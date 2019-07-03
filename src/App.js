import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
//comment.
import Header from './Header';
// import Footer from './Footer';
// import Home from './Home';
import Login from './Login';
import UserList from './UserList';
import User from './User';
import GroupList from './GroupList';
import Group from './Group';
import LectureList from './LectureList';
import Lecture from './Lecture';
import TestList from './TestList';
import Test from './Test';
import ProgrammingTaskList from './ProgrammingTaskList';
import ProgrammingTask from './ProgrammingTask';
import ExerciseList from './ExerciseList';
import Exercise from './Exercise';
import CourseList from './CourseList';
import Course from './Course';
import Register from './Register';
import NewLecture from "./NewLecture";
import NewTest from "./NewTest";

// import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/UserList" component={UserList} />
          <Route exact path="/User-:id" component={User} />
          <Route exact path="/GroupList" component={GroupList} />
          <Route exact path="/Group-:id" component={Group} />
          <Route exact path="/LectureList" component={LectureList} />
          <Route exact path="/Lecture-:id" component={Lecture} />
          <Route exact path="/TestList" component={TestList} />
          <Route exact path="/Test-:id" component={Test} />
          <Route exact path="/ProgrammingTaskList" component={ProgrammingTaskList} />
          <Route exact path="/ProgrammingTask-:id" component={ProgrammingTask} />
          <Route exact path="/ExerciseList" component={ExerciseList} />
          <Route exact path="/Exercise-:id" component={Exercise} />
          <Route exact path="/CourseList" component={CourseList} />
          <Route exact path="/Course-:id" component={Course} />
          <Route path="/Register" component={Register} />
          <Route exact path="/NewLecture" component={NewLecture} />
          <Route exact path="/NewTest" component={NewTest} />
          {/* <Route path="/" component={Footer} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
