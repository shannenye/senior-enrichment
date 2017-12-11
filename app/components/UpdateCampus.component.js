import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSingleCampus} from '../reducers/campuslistReducer';

class UpdateCampus extends Component {
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

    componentDidMount() {
        this.props.loadSingleCampus(this.props.singleCampus)
    }

    handleSubmit(event) {
        event.preventDefault();


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
        const campusToUpdate = this.props.singleCampus
        return (

            <form id="form1" onSubmit={this.handleSubmit}>
            <label>Edit Campus Name: </label>
            <input
            type="text"
            onChange={this.handleName}
            name="name"
            value={this.state.name}
            placeholder="Change Name"
            />

            <label>Change Campus Picture: </label>
            <input
            type="text"
            onChange={this.handleImageUrl}
            name="imageUrl"
            value={this.state.imageUrl}
            placeholder="New Image Link"
            />

            <label>Edit Description: </label>
            <input
            type="text"
            onChange={this.handleDescription}
            name="description"
            value={this.state.description}
            placeholder="Description"
            />

            <input type="submit" value="Submit" />
        </form>
        )
    }
}

function mapStateToProps(storeState) {
    return {
        singleCampus: storeState.campuses.singleCampus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadSingleCampus: function(id) {
            dispatch(fetchSingleCampus(id))
        }
    }
}

const updateCampusContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);

export default updateCampusContainer;
