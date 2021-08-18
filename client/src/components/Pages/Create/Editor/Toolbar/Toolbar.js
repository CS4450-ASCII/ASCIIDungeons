import { makeStyles, withTheme } from '@material-ui/core/styles';
import React from 'react';
import { Field } from 'react-final-form';
import Checkbox from '../../../../Common/Checkbox';
import EditMenu from './Menus/EditMenu';
import FileMenu from './Menus/FileMenu';
import ViewMenu from './Menus/ViewMenu';

function Toolbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.toolbarRoot}>
      <FileMenu endDivider />
      <EditMenu endDivider />
      <ViewMenu style={{ flex: 1 }} />
      <Field name={'isPublished'}>
        {({ input: { value, onChange } }) => (
          <Checkbox
            label={'Published?'}
            variant={'dark'}
            labelStyle={{
              fontSize: '1.5em',
              paddingTop: 3,
            }}
            initialValue={value}
            onChange={onChange}
          />
        )}
      </Field>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbarRoot: {
    backgroundColor: theme.palette.gray.light,
    display: 'flex',
    alignItems: 'center',
    height: 'min-content',
    width: '100%',
    paddingRight: 12,
  },
}));

export default withTheme(Toolbar);
