import _ from 'lodash';
import InputField from '../../../../Common/Forms/InputField';
import LevelsDropdownList from '../LevelsDropdownList';
import StairsDropdownList from '../StairsDropdownList';

export function displayStairsDialog(setModalProps, levels) {
  return function (object, x, y, setMapSpace, clearMapSpace) {
    if (!_.get(object, 'dataTemplate')) return;
    const objectId = `${x},${y}`;
    setModalProps({
      key: objectId,
      objectId,
      initiallyOpen: true,
      openButton: <div />,
      formFields: [
        {
          name: 'title',
          Component: InputField,
          noWrap: true,
        },
        {
          name: 'goToLevelId',
          label: 'Go To Level',
          Component: LevelsDropdownList,
          options: levels,
          inputWidth: 150,
          noWrap: true,
        },
        {
          name: 'goToStairsId',
          label: 'Go To Stairs',
          Component: StairsDropdownList,
          levels,
          inputWidth: 150,
          noWrap: true,
        },
      ],
      title: 'Edit Stairs',
      initialValues: {
        title: object.title,
      },
      onCancel: () => {
        clearMapSpace(x, y);
      },
      onSubmit: (values, props) => {
        const stairAttributes = {
          objectId: _.get(props, 'objectId'),
          ...object,
          ...values,
        };
        setMapSpace(x, y, stairAttributes);
      },
    });
  };
}
