import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  Item,
  FieldName,
  FieldNum,
  DeleteBtn,
} from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <FieldName>{name}:</FieldName>
        <FieldNum>{number}</FieldNum>
        <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </Item>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
