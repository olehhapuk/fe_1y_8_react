import { Typography } from '@mui/material';

function Section({ title, children }) {
  return (
    <section>
      <Typography variant="h4">{title}</Typography>
      {children}
    </section>
  );
}

export default Section;
