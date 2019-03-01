
const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin,
        search: state.search,

    };
};

export default mapStateToProps;