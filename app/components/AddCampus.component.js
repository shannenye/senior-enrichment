import React, {Component} from 'react';
import {connect} from 'react-redux';
import { postCampus, fetchCampuses } from '../reducers/campuslistReducer';


class AddCampus extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imageUrl: '',
            description: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleImageUrl = this.handleImageUrl.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.postACampus(event, this.state);
    }

    handleName(event) {
        this.setState({name: event.target.value})
    }

    handleImageUrl(event) {
        this.setState({imageUrl: event.target.value})
    }

    handleDescription(event) {
        this.setState({description: event.target.value})
    }

    render() {
        return (
            <form id="form1" onSubmit={this.handleSubmit}>
                <h2>Add Campus</h2>
                <div>
                <label>Campus Name: </label>
                <input
                type="text"
                onChange={this.handleName}
                name="name"
                value={this.state.name}
                placeholder="Campus Name"
                />
                </div>

                <div>
                <label>Campus Picture: </label>
                <input
                type="text"
                onChange={this.handleImageUrl}
                name="imageUrl"
                value={this.state.imageUrl}
                placeholder="Image Link"
                />
                </div>

                <div>
                <label>Description: </label>
                <input
                type="text"
                onChange={this.handleDescription}
                name="description"
                value={this.state.description}
                placeholder="Description"
                />
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

function mapStateToProps(storeState) {
    return {
        campusToAdd: {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postACampus: function(event, campus) {
            dispatch(postCampus(campus))
        },
        loadCampuses: function() {

            dispatch(fetchCampuses())
        }
    }
}

const addCampusContainer = connect(mapStateToProps, mapDispatchToProps)(AddCampus)

export default addCampusContainer;
