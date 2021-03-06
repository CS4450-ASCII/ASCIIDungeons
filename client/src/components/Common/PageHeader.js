import { Grid, makeStyles, Typography } from '@material-ui/core';
import figlet from 'figlet';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ErrorContext } from '../../context/ErrorProvider';

const titleOverrides = { main: ' ', signup: ' ', login: ' ' };
const isSmall = { create: true };

function PageHeader(props) {
  const { errors } = useContext(ErrorContext);
  const location = _.get(useLocation(), 'pathname').split('/')[1];

  const pageName = titleOverrides[location] || _.startCase(location);

  return (
    <PageHeaderDisplay
      {...{ errors, location, pageName, small: isSmall[location], ...props }}
    />
  );
}

PageHeaderDisplay.propTypes = {
  text: PropTypes.string,

  small: PropTypes.bool,

  errors: PropTypes.array,

  location: PropTypes.string,
};

export function PageHeaderDisplay(props) {
  const classes = useStyles();
  const { text, small, errors, pageName } = props;
  const [output, setOutput] = useState('');

  useEffect(() => {
    figlet.text(
      text,
      {
        font: `${small ? 'Sm' : ''}Slant`,
      },
      (err, result) => {
        if (err) {
          console.error(err.message);
        } else {
          setOutput(result);
        }
      },
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
          {errors.map((error) => (
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
    margin: 'auto',
    '& h2': {
      marginTop: '-0.8em',
    },
  },
  errorMessage: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    marginTop: '2em',
    marginBottom: '-3em',
    wordWrap: 'break-word',
  },
});

export default PageHeader;
