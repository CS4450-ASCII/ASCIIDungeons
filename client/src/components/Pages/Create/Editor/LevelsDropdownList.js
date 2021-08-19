import { makeStyles, withTheme } from '@material-ui/core';
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import { levelGraphql } from '../../../../graphql/level';
import { useQueryWithError } from '../../../../helpers/customHooks';
import DropdownList from '../../../Common/Forms/DropdownList';
import LoadingContainer from '../../../Common/LoadingContainer';

function LevelsDropdownList(props) {
  const classes = useStyles();
  const {} = props;
  const { gameId } = useParams();
  const { data, loading } = useQueryWithError(levelGraphql.QUERY_LEVELS, {
    variables: { gameId },
  });

  if (loading) return <LoadingContainer />;

  return (
    <DropdownList
      {...{
        ...props,
        options: _.get(data, 'levels'),
        noOptionsMessage: 'No levels found',
      }}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  levelsDropdownListRoot: {},
}));

LevelsDropdownList.propTypes = {};

LevelsDropdownList.defaultProps = {};

export default withTheme(LevelsDropdownList);
