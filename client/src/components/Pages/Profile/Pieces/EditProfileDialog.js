import React from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { userGraphql } from '../../../../graphql/user';
import { useCurrentUser, useMutationWithError, useQueryWithError } from '../../../../helpers/customHooks';
import FormDialog from '../../../Common/Forms/FormDialog';
import InputField from '../../../Common/Forms/InputField';

function EditProfileDialog(props) {
  const { openButton, title = 'Edit Profile', onSubmit, ...rest } = props;

  const { id } = useParams();
  const { loading, data, refetch } = useQueryWithError(
    userGraphql.USER,
    {
      variables: {
        id,
      },
    },
  );

  const { currentUser } = useCurrentUser();

  const history = useHistory();

  const [updateUser] = useMutationWithError(userGraphql.UPDATE_USER);

  const handleSubmit = async (values) => {
    onSubmit && onSubmit(values);

    console.log(values.displayName);
    console.log(values.email);

    const response = await updateUser({
      variables: {
        params: values
      },
    });

    console.log(response);

    //const updatedDisplayName = _.get(response, 'data.updateUser.displayName');
    //const updatedEmail = _.get(response, 'data.updateUser.email');

    //console.log(updatedDisplayName);
    //console.log(updatedEmail);

    //Refresh page if successful:
    // if (updatedDisplayName) {
    //   history.go(0);
    // }
  };

  const formFields = [
    {
      name: 'displayName',
      Component: InputField,
      noWrap: true,
    },
    {
      name: 'email',
      Component: InputField,
      noWrap: true,
    },
  ];

  if(currentUser.id == data.user.id){
    return (
      <FormDialog
        {...{
          initialValues: {
            id: currentUser.id,
            displayName: currentUser.displayName,
            email: currentUser.email
          },
          title,
          openButton,
          formFields,
          onSubmit: handleSubmit,
          maxWidth: 'xs',
          ...rest,
        }}
      />
    );
  }
  else {
    return <div></div>
  }
}

export default EditProfileDialog;
