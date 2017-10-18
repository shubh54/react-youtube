import React, {Component} from "react";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term : "" };   
    }
    render() {
        return (
            <div className="search-bar">
                <input 
                    className="form-control"
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange( term );
    }
}