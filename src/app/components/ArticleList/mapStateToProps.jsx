
const mapStateToProps = (state) => {
    return {
        search: state.search,
        listShouldUpdate: state.listShouldUpdate,

    };
};

export default mapStateToProps;