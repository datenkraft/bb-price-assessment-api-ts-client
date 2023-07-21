/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { customerPricingProfile } from '../models/customerPricingProfile';
import type { customerPricingProfileCollection } from '../models/customerPricingProfileCollection';
import type { errorResponse } from '../models/errorResponse';
import type { newCustomerPricingProfile } from '../models/newCustomerPricingProfile';
import type { patchCustomerPricingProfile } from '../models/patchCustomerPricingProfile';
import { request as __request } from '../core/request';

export class CustomerPricingProfileService {

    /**
     * Query Customer Pricing Profile collection by customer ids
     * Query Customer Pricing Profile collection by customer ids
     * @param filterCustomerIds Comma seperated list of customer ids (optional)
     * @returns customerPricingProfileCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getCustomerPricingProfileCollectionEndpoint(
        filterCustomerIds?: string,
    ): Promise<customerPricingProfileCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/customer-pricing-profile`,
            query: {
                'filter[customerIds]': filterCustomerIds,
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
     * Add a new Customer Pricing Profile
     * Add a new Customer Pricing Profile. You may not use this endpoint to add stepped prices to an
     * existing pricing profile.
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

    /**
     * Update a Customer Pricing Profile
     * Update one or more fields of a Customer Pricing Profile.\
     * Please note, that existing stepped prices are replaced by the value you send via the request body, not supplemented.
     * @param customerPricingProfileId Customer Pricing Profile Id
     * @param requestBody
     * @returns customerPricingProfile Ok
     * @throws ApiError
     */
    public static async patchCustomerPricingProfile(
        customerPricingProfileId: string,
        requestBody: patchCustomerPricingProfile,
    ): Promise<customerPricingProfile> {
        const result = await __request({
            method: 'PATCH',
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

}