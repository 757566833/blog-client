import React from 'react';
import { withRouter } from 'react-router-dom';
// import Control from '../../control/components/Svg';
class Svg extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, className } = this.props;
        return (
            <div className={`Svg ${className}`}>
                <svg className='svg' aria-hidden='true'>
                    <use xlinkHref={`#icon-${type}`}></use>
                </svg>
            </div >
        );
    }
}
export default withRouter(Svg);
