import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { getSmurfs } from '../actions';
// import { Header, Card } from 'semantic-ui-react';

const SmurfList = props => {
    // console.log('props from SmurfList component: ', props);
    return (
        <div>
            <button onClick={props.getSmurfs}>
                {props.isFetching ? (
                    <Loader type="TailSpin" color="#00BFFF" height={15} width={100} />
                ) : (
                        "Meet our Smurf villagers!"
                    )}
            </button>
                {props.smurfs.map(smurf => {
                    return (
                        <div key={smurf.name}>{smurf.name}, age {smurf.age}, as tall as {smurf.height}</div>
                    )
                })}
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