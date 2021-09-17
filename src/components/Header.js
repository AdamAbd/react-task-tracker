import { useLocation } from 'react-router-dom'
import Button from "./Button";

export default function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === '/' && <Button onClick={props.onClick} color={`${props.showAdd ? 'black' : 'green'}`} text={`${props.showAdd ? 'Close' : 'Add'}`} />}
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};
