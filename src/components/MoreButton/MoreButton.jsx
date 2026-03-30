import "./MoreButton.css";

export default function MoreButton(props) {
  return (
    <button className="MoreButton-button" style={{ width: "200px" }}>
      {props.children}
    </button>
  );
}
