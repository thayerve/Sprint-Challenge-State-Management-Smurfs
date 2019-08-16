import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getSmurfs } from '../actions';
// import { Header, Card } from 'semantic-ui-react';

const SmurfList = props => {
    console.log('props from SmurfList component: ', props);
    return (
        <div>
            <button onClick={props.getSmurfs}>
                {props.isLoading ? (
                    <Loader type="TailSpin" color="#00BFFF" height="15" width="100" />
                ) : (
                        "List all Smurfs in the village"
                    )}
            </button>
            {props.smurfs.map(smurf => <div>{smurf.name}</div>)}
        </div>
    );


};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, {getSmurfs})(SmurfList);