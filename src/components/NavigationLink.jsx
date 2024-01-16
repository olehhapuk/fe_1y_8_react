import { NavLink } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function NavigationLink({ children, ...props }) {
  return (
    <Button
      as={NavLink}
      justifyContent="start"
      variant="ghost"
      borderRadius="3xl"
      size="lg"
      sx={{
        '&.active': {
          bgColor: 'blue.500',
          '&:hover': {
            bgColor: 'blue.600',
          },
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavigationLink;
