import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../../context/ContextProvider';

function useErrorHandler() {
  const location = useLocation();
  const { setErrors } = useContext(AppContext);

  useEffect(() => {
    // clear errors whenever the location changes
    setErrors(null);
  }, [location.pathname, setErrors]);

  return { setErrors };
}

export default useErrorHandler;
