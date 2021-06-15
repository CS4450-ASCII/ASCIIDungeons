import { Grid, makeStyles, Typography } from '@material-ui/core';
import figlet from 'figlet';
import _ from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AppContext } from '../../context/ContextProvider';

function PageHeader(props) {
  const classes = useStyles();
  const { text, small } = props;
  const [output, setOutput] = useState('');

  const { errors } = useContext(AppContext);

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
      {_.get(errors, 'length') > 0 && (
        <Grid item xs={12} className={classes.errorMessage}>
          {errors.map(error => (
            <Typography key={`error-${error}`} variant='h3' color='error'>
              {error}
            </Typography>
          ))}
        </Grid>
      )}
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    width: 'max-content',
    marginBottom: '8em',
    margin: 'auto',
    '& h2': {
      marginTop: '-0.8em'
    }
  },
  errorMessage: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    marginTop: '2em',
    marginBottom: '-3em',
    wordWrap: 'break-word'
  }
});
export default PageHeader;
