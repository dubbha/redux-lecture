import { useRouteMatch, useLocation, useHistory, useParams } from 'react-router-dom';

const DeepComponent = () => {    // not a "route component", far deep from Route
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const params = useParams();

  return (
    <>
      <div>match.path: {match.path}</div>
      <div>location.pathname: {location.pathname}</div>
      <div>params.answer: {params.answer}</div>

      <button onClick={() => history.push('/home')}>Go Home</button>
    </>
  );
};