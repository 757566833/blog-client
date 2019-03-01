import action from './action.jsx';

const mapDispatchToProps = (dispatch) => {
    return {
        setListShouldUpdateState: (listShouldUpdate) => dispatch(action.setListShouldUpdateState(listShouldUpdate)),

    };
};
export default mapDispatchToProps;