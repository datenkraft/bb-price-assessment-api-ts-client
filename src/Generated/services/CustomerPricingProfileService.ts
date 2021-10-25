/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customerPricingProfile } from '../models/customerPricingProfile';
import type { errorResponse } from '../models/errorResponse';
import type { newCustomerPricingProfile } from '../models/newCustomerPricingProfile';
import { request as __request } from '../core/request';

export class CustomerPricingProfileService {

    /**
     * Add a new Customer Pricing Profile
     * Add a new Customer Pricing Profile
     * @param requestBody
     * @returns customerPricingProfile Created
     * @throws ApiError
     */
    public static async postCustomerPricingProfile(
        requestBody: newCustomerPricingProfile,
    ): Promise<customerPricingProfile> {
        const result = await __request({
            method: 'POST',
            path: `/customer-pricing-profile`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Query Customer Pricing Profile by by its id
     * Query Customer Pricing Profile by by its id
     * @param customerPricingProfileId Customer Pricing Profile Id
     * @returns customerPricingProfile OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getCustomerPricingProfile(
        customerPricingProfileId: string,
    ): Promise<customerPricingProfile | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/customer-pricing-profile/${customerPricingProfileId}`,
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
     * Add a new Customer Pricing Profile
     * Add a new Customer Pricing Profile
     * @param customerPricingProfileId Customer Pricing Profile Id
     * @param requestBody
     * @returns customerPricingProfile Created
     * @throws ApiError
     */
    public static async putCustomerPricingProfile(
        customerPricingProfileId: string,
        requestBody: newCustomerPricingProfile,
    ): Promise<customerPricingProfile> {
        const result = await __request({
            method: 'PUT',
            path: `/customer-pricing-profile/${customerPricingProfileId}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Delete Customer Pricing Profile
     * Delete Customer Pricing Profile
     * @param customerPricingProfileId Customer Pricing Profile Id
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteCustomerPricingProfile(
        customerPricingProfileId: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/customer-pricing-profile/${customerPricingProfileId}`,
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