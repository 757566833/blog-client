import { putFetch } from '../../../../fetch/fetch';
import api from '../../../../config/apiConfig';
const model = async (json = {}) => {
    return putFetch(
        `${api}/article`,
        json
    );
};
export default model;