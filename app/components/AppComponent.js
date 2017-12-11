import React, { Component } from 'react'
import ReactDom, {render} from 'react-dom'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import CampusList from './CampusList.component';
import StudentList from './StudentList.component';
import SingleCampus from './SingleCampus.component';
import SingleStudent from './SingleStudent.component';

export default class Main extends Component {
    render() {
        return (
            <div>
                <div className='homepageHeader'>
                    <h3 id='school-name'>Spacestack Academy</h3>

                    <NavLink to='/campuses'>
                    <button >
                        <h3>Campuses</h3>
                    </button>
                    </NavLink>

                    <NavLink to='/students'>
                    <button>
                        <h3>Students</h3>
                    </button>
                    </NavLink>

                    <NavLink to='/'>
                    <button>
                        <h3>Home</h3>
                    </button>
                    </NavLink>
                </div>

                <Switch>
                    <Route exact path='/campuses' component={CampusList} />
                    <Route path='/campuses/:id' component={SingleCampus} />
                    <Route exact path='/students' component={StudentList} />
                    <Route path='/students/:id' component={SingleStudent} />
                    <Route exact path='/'/>
                </Switch>
            </div>
        )
    }
}