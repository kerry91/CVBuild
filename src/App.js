import "./styles.css";
import { connect } from "react-redux";
import MainPage from "./View/main";


const App = () => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(App);
