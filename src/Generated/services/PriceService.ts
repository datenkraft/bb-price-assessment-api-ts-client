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
     * @param filterValidFrom Valid From Date filter
     * @returns getPriceCollectionResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getPriceCollection(
        filterCustomerId: string,
        filterSkuCode: string,
        filterValidFrom?: string,
    ): Promise<getPriceCollectionResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/price`,
            query: {
                'filter[customerId]': filterCustomerId,
                'filter[skuCode]': filterSkuCode,
                'filter[validFrom]': filterValidFrom,
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

    /**
     * Get Price Table
     * Get Price Table for an Organization. The prices are sorted by: skuGroup:name, sku:name, validFrom,
     * steppedPrices:validFromQuantity.
     * @param filterOrganizationId Organization Id filter
     * @param filterValidFrom Valid From Date filter in UTC
     * @returns any OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getReportPrice(
        filterOrganizationId: string,
        filterValidFrom?: string,
    ): Promise<any | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/price.csv`,
            query: {
                'filter[organizationId]': filterOrganizationId,
                'filter[validFrom]': filterValidFrom,
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