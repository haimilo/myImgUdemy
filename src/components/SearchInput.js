import React from "react";

class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = { entry: '' };
        // Cách 1 để sử dụng this trong các trường hợp function con
        // this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    // Cách 1
    // onFormSubmit(e) {
    //     e.preventDefault();
    //     console.log(this.state.entry);
    // }
    // Cách 2 sử dụng arrow function
    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.entry);
        this.props.onSearchSubmit(this.state.entry);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input
                                type="text"
                                placeholder='search...'
                                onChange={(e) => this.setState({ entry: e.target.value })}
                                value={this.state.entry}
                            />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;