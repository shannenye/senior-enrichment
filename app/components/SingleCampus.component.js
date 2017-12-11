import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {fetchSingleCampus} from '../reducers/campuslistReducer';
import {deleteStudent} from '../reducers/studentListReducer';
import UpdateCampus from './UpdateCampus.component';

class SingleCampus extends Component {
    componentDidMount() {
        this.props.loadSingleCampus(this.props.match.params.id);
    }

    // handleUpdate(id) {
    //     this.props.updatedCampus(id);
    // }

    handleDelete(id) {
        this.props.removeStudent(id);
    }

    render() {
        const campus = this.props.singleCampus;
        // console.log(campus.students)
        return (
            <div>
                <h4>You are viewing all Students attending {campus.name}</h4>
                <h5>Update Campus Details</h5>
                <UpdateCampus singleCampus={this.props.singleCampus} />
                <ul>

                    {
                        campus.students && campus.students.map(eachStudent => (
                            <div key={`${eachStudent.id}`}>
                                <li>
                                    <NavLink to={`/students/${eachStudent.id}`}>{eachStudent.name}</NavLink>
                                    <button onClick={() => (this.handleDelete(eachStudent.id))}>X</button>
                                </li>
                            </div>
                        ))
                    }
                </ul>
                <h5>Details: {campus.description}</h5>
                <img src={campus.imageUrl} />

            </div>
        )
    }
}


// can edit a campus's info, including adding/removing a student to/from that campus

function mapStateToProps(storeState) {
    return {
        singleCampus: storeState.campuses.singleCampus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadSingleCampus: function(id) {
            dispatch(fetchSingleCampus(id))
        },
        removeStudent: function(id) {
            dispatch(deleteStudent(id))
        }
        // updatedCampus: function(id) {
        //     dispatch(updateCampus(id))
        // }
    }
}

const singleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

export default singleCampusContainer;