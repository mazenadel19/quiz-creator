import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h1>Are you lost?</h1>
      <Link to='/'>
        <p>Go back to the home page</p>
      </Link>
    </div>
  );
}
