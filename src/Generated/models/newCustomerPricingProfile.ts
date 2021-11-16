/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';

export type newCustomerPricingProfile = {
    /**
     * Customer Id
     */
    customerId: string;
    /**
     * SKU Code
     */
    skuCode: string;
    price?: priceProperty;
    /**
     * Percent (5 digits precision, 5 pre-decimal digits)
     */
    percent?: number | null;
    /**
     * Start date from when on the price is valid
     */
    validFrom: string;
}
