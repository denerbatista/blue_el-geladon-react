import "./style.css";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="Loading_Container">
      <div className="Loading_Content">
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
        <ReactLoading type="spin" color="lightblue" />
      </div>
    </div>
  );
};

export default Loading;
