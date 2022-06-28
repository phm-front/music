// import React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addAction } from "./store/main/actionCreators";
import { ReduxState } from "./store/types";
import { useRoutesConfig } from "./hooks/useRoutes";
import './assets/css/index.css';

const App = (props) => {
  const element = useRoutesConfig();
  return (
    <div>
      <div className="count font-bold underline">{props.count}</div>
      <button onClick={props.addCount}>+10</button>
      {element}
    </div>
  );
};

const mapStateToProps = (state: ReduxState) => ({
  count: state.mainStore.count,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCount: () => {
    dispatch(addAction(10));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
