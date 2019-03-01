import { postFetch } from '../../../fetch/fetch';
import api from '../../../config/apiConfig';
const model = async (json = {}) => {
    return postFetch(
        `${api}/login`,
        json
    );
};
export default model;