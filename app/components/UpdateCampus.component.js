import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateCampus} from '../reducers/campuslistReducer';

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

    handleSubmit(event) {
        // const campusToUpdate = this.props.singleCampus
        event.preventDefault();
        let updatedCampus= {
            name: (this.state.name) ? this.state.name : this.props.singleCampus.name,
            imageUrl: (this.state.imageUrl) ? this.state.imageUrl : this.props.singleCampus.imageUrl,
            description: (this.state.description) ? this.state.description : this.props.singleCampus.description
        }
        console.log("button clicked", updatedCampus, this.props.singleCampus.id)
        this.props.updatedCampus(updatedCampus, this.props.singleCampus.id)
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
            <div>
            <label>Edit Campus Name: </label>
            <input
            type="text"
            onChange={this.handleName}
            name="name"
            value={this.state.name}
            placeholder="Change Name"
            />
            </div>

            <div>
            <label>Change Campus Picture: </label>
            <input
            type="text"
            onChange={this.handleImageUrl}
            name="imageUrl"
            value={this.state.imageUrl}
            placeholder="New Image Link"
            />
            </div>

            <div>
            <label>Edit Description: </label>
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
        something: {}
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updatedCampus: function(info, id) {
            dispatch(updateCampus(info, id))
        }

    }
}

const updateCampusContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);

export default updateCampusContainer;
