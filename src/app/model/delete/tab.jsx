import { deleteFetch } from '../../../../fetch/fetch';
import api from '../../../../config/apiConfig';
const model = async (json = {}) => {
    return deleteFetch(
        `${api}/tab`,
        json
    );
};
export default model;