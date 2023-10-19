import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

// (Не обов'язково) Дописати проп тайпи для onDelete
function ContactsList({ contacts, onDelete }) {
  return (
    <ul>
      <AnimatePresence>
        {contacts.map((contact) => (
          <motion.li
            key={contact.id}
            // Стилі на початку анімації
            initial={{
              opacity: 0,
            }}
            // Стилі на завершенні анімації появи, а також на початку анімації зникнення
            animate={{
              opacity: 1,
              x: 0,
            }}
            // Стилі на завершенні анімації зникнення
            exit={{
              opacity: 0,
              x: 100,
            }}
          >
            {contact.name} - {contact.number}{' '}
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
