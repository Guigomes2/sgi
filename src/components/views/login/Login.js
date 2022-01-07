import React, { useStates } from 'react';
import { connect } from 'react-redux';
import React from './components/pages/index';

function initialState() {
    return {user: '', password: ''};
}

const Login = () => {
    function onChange() {
        const [values, setValues] = useState(initialState);
        funcition onChange(e) { 
            const { name, value } = e.target;
            setValues({...values, [e.target.name]: e.target.value});

        }

    export class Login extends Component {
        render() {
            return (
                <div>
                    <Index />
                </div>
            )
        }
    }

    const mapStateToProps = (state) => ({

    })

    const mapDispatchToProps = dispatch => ({

    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
