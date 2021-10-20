/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newOrganizationPricingProfile } from '../models/newOrganizationPricingProfile';
import type { organizationPricingProfile } from '../models/organizationPricingProfile';
import { request as __request } from '../core/request';

export class OrganizationPricingProfileService {

    /**
     * Add a new Organization Pricing Profile
     * Add a new Organization Pricing Profile
     * @param requestBody
     * @returns organizationPricingProfile Created
     * @throws ApiError
     */
    public static async postOrganizationPricingProfile(
        requestBody: newOrganizationPricingProfile,
    ): Promise<organizationPricingProfile> {
        const result = await __request({
            method: 'POST',
            path: `/organization-pricing-profile`,
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
     * Query Organization Pricing Profile by by its id
     * Query Organization Pricing Profile by by its id
     * @param organizationPricingProfileId Organization Pricing Profile Id
     * @returns organizationPricingProfile OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOrganizationPricingProfile(
        organizationPricingProfileId: string,
    ): Promise<organizationPricingProfile | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization-pricing-profile/${organizationPricingProfileId}`,
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
     * Add a new Organization Pricing Profile
     * Add a new Organization Pricing Profile
     * @param organizationPricingProfileId Organization Pricing Profile Id
     * @param requestBody
     * @returns organizationPricingProfile Created
     * @throws ApiError
     */
    public static async putOrganizationPricingProfile(
        organizationPricingProfileId: string,
        requestBody: newOrganizationPricingProfile,
    ): Promise<organizationPricingProfile> {
        const result = await __request({
            method: 'PUT',
            path: `/organization-pricing-profile/${organizationPricingProfileId}`,
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
     * Delete Organization Pricing Profile
     * Delete Organization Pricing Profile
     * @param organizationPricingProfileId Organization Pricing Profile Id
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async deleteOrganizationPricingProfile(
        organizationPricingProfileId: string,
    ): Promise<errorResponse> {
        const result = await __request({
            method: 'DELETE',
            path: `/organization-pricing-profile/${organizationPricingProfileId}`,
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