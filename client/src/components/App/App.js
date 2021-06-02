import { userRequests } from '../../requests/user';
import LoginForm from '../Authentication/LoginForm';
import AppContainer from '../AppContainer/AppContainer';
import { useQuery } from '@apollo/client';
import _ from 'lodash';

function App() {
  const { loading, error, data } = useQuery(userRequests.CURRENT_USER);

  if (loading) return 'Loading...';
  if (error) return `Error occurred: ${error.message}`;

  return (
    <div className='App'>
      {_.get(data, 'currentUser') ? <AppContainer /> : <LoginForm />}
    </div>
  );
}

export default App;
