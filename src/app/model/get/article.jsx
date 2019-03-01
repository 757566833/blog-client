import { getFetch } from '../../../../fetch/fetch';
import api from '../../../../config/apiConfig';
const model = async (json = {}) => {
    return getFetch(
        `${api}/article`,
        json
    );
};
export default model;