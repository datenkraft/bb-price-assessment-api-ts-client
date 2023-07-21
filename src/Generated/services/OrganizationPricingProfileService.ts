/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { newOrganizationPricingProfile } from '../models/newOrganizationPricingProfile';
import type { organizationPricingProfile } from '../models/organizationPricingProfile';
import type { organizationPricingProfileCollection } from '../models/organizationPricingProfileCollection';
import type { patchOrganizationPricingProfile } from '../models/patchOrganizationPricingProfile';
import { request as __request } from '../core/request';

export class OrganizationPricingProfileService {

    /**
     * Query Organization Pricing Profile collection by organization ids
     * Query Organization Pricing Profile collection by organization ids
     * @param filterOrganizationIds Comma seperated list of organization ids (optional)
     * @returns organizationPricingProfileCollection OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getOrganizationPricingProfileCollection(
        filterOrganizationIds?: string,
    ): Promise<organizationPricingProfileCollection | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/organization-pricing-profile`,
            query: {
                'filter[organizationIds]': filterOrganizationIds,
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
     * Add a new Organization Pricing Profile
     * Add a new Organization Pricing Profile. You may not use this endpoint to add stepped prices to an
     * existing pricing profile.
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

    /**
     * Update a Organization Pricing Profile
     * Update one or more fields of a Organization Pricing Profile.\
     * Please note, that existing stepped prices are replaced by the value you send via the request body, not supplemented.
     * @param organizationPricingProfileId Organization Pricing Profile Id
     * @param requestBody
     * @returns organizationPricingProfile Ok
     * @throws ApiError
     */
    public static async patchOrganizationPricingProfile(
        organizationPricingProfileId: string,
        requestBody: patchOrganizationPricingProfile,
    ): Promise<organizationPricingProfile> {
        const result = await __request({
            method: 'PATCH',
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

}