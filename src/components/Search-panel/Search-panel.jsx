import { Component } from "react";
import "./Search-panel.scss";

export class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleQuery = (e) => {
    const query = e.target.value;

    this.setState({query: query})
    this.props.onQuery(query)
  }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="знайти співробітника"
        value={this.state.query}
        onChange={this.handleQuery}
      />
    );
  }
};
