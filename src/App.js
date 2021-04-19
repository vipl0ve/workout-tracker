import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import WorkoutLogList from "./components/workoutlogs-list.component";
import CreateWorkoutLog from "./components/create-workoutlog.component";
import EditWorkoutLog from "./components/edit-workoutlog.component";
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    // Create Routes
    <Router>
    <div className="container">
    <Navbar />
    <br/>
    <Route path="/" exact component={Home} />
    <Route path="/workout" exact component={WorkoutLogList} />
    <Route path="/workout/add" exact component={CreateWorkoutLog} />
    <Route path="/workout/edit/:id" component={EditWorkoutLog} />
    <Route path="/exercise" exact component={ExercisesList} />
    <Route path="/exercise/add" component={CreateExercise} />
    <Route path="/exercise/edit/:id" component={EditExercise} />
    <Route path="/user/add" component={CreateUser} />
    </div>
  </Router>
  );
}

export default App;
