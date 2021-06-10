import { Grid, makeStyles, Typography } from '@material-ui/core';
import figlet from 'figlet';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    marginBottom: '8em',
    margin: 'auto',
    '& h2': {
      marginTop: '-0.8em'
    }
  }
});

function PageHeader(props) {
  const classes = useStyles();
  const { text, small } = props;
  const [output, setOutput] = useState('');

  const location = _.get(useLocation(), 'pathname').slice(1);
  const titleOverrides = { main: ' ' };
  const pageName = titleOverrides[location] || _.startCase(location);

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

  return (
    <Grid
      container
      direction='column'
      alignItems='flex-end'
      className={classes.root}
    >
      <Grid item>
        <pre>{output}</pre>
      </Grid>
      <Grid item>
        <Typography variant='h2'>{pageName}</Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
