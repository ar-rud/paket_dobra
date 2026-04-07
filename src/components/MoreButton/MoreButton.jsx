import "./MoreButton.css";

export default function MoreButton(props) {
  return (
    <button className="MoreButton-button" style={props.style}>
      {props.children}
    </button>
  );
}
