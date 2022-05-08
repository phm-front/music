// import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addAction } from './store/main/actionCreators';
import { ReduxState } from './store/types';

const App = (props) => {
  return (
    <div>
      <div className="count">{ props.count }</div>
      <button onClick={ props.addCount }>+10</button>
    </div>
  );
}

const mapStateToProps = (state: ReduxState) => ({
  count: state.mainStore.count
})
const mapActionToProps = (dispatch: Dispatch) => ({
  addCount: () => {
    dispatch(addAction(10))
  }
})
export default connect(mapStateToProps, mapActionToProps)(App);
