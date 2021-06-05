import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import figlet from 'figlet';

const useStyles = makeStyles({
  root: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '10em'
  }
});

function PageHeader(props) {
  const classes = useStyles();
  const { text, small } = props;
  const [output, setOutput] = useState('');

  useEffect(() => {
    figlet.text(
      text,
      {
        font: `${small ? 'Sm' : ''}Slant`
      },
      (err, result) => {
        if (err) {
          console.error(err.message);
        } else {
          setOutput(result);
        }
      }
    );
  }, [text, small]);

  return <pre className={classes.root}>{output}</pre>;
}

export default PageHeader;
