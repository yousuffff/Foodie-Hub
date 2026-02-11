import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();

  return (
    <div>
      <h2>Error aagyi</h2>
      <h1>Bhaaaaagooooooooooo</h1>
      <h3>
        {err.status}:{err.statusText}
      </h3>
    </div>
  );
};
export default Error;
