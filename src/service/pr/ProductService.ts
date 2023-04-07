import { jsonApi } from '../../utils/jsonApi';
import { formApi } from '../../utils/formApi';

class CodeService {
	async getProductList(json?:any) { // 상품 리스트 [PR_PROD]
		const res = await jsonApi('/bo/pr/getProductList', json);
		return res.data;
	}
	async getProduct(json?:any) { // 상품 상세조회 [PR_PROD]
		const res = await jsonApi('/bo/pr/getProduct', json);
		return res.data;
	}
}
export default new CodeService();

