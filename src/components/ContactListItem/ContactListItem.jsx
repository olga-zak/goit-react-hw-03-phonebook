import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

  deleteContact: PropTypes.func,
};
