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
