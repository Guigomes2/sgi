import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Index extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
