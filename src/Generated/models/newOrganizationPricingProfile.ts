/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';

/**
 * Class OrganizationPricingProfileResource
 */
export type newOrganizationPricingProfile = {
    /**
     * Organization Id
     */
    organizationId: string;
    /**
     * SKU Code
     */
    skuCode: string;
    price?: priceProperty;
    /**
     * Percent (5 digits precision, 5 pre-decimal digits)
     */
    percent?: number | null;
}
