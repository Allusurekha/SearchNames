import React, { Component } from "react";

function searchingFor(term) {
  return function(x) {
    return x.name.includes(term) || !term;
  };
}

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    const { term } = this.state;
    const { users } = this.props;
    return (
      <div>
        
        <form>
          <input type="text" onChange={this.searchHandler} placeholder = "search..."value={term} />
        </form>
        <table>
        <h5>List of Names</h5>
        {users.filter(searchingFor(term)).map(user => ( 
        <table> 
          <tr>
            <td>
              {user.name}
            </td>
          </tr>
        </table>
        ))}
        </table>
      </div>
    );
  }
}

export default Users;
