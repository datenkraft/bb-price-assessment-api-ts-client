/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { getPriceCollectionResponse } from '../models/getPriceCollectionResponse';
import { request as __request } from '../core/request';

export class PriceService {

    /**
     * Get Price
     * Get Price
     * @param filterCustomerId Customer Id filter
     * @param filterSkuCode SKU Code filter
     * @returns getPriceCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getPriceCollection(
        filterCustomerId: string,
        filterSkuCode: string,
    ): Promise<getPriceCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/price`,
            query: {
                'filter[customerId]': filterCustomerId,
                'filter[skuCode]': filterSkuCode,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}