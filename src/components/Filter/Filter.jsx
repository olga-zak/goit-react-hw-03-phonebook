import { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <label>
        Find contact by name:
        <input
          type="text"
          name="filter"
          value={this.props.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.props.findContact}
          required
        />
      </label>
    );
  }
}
