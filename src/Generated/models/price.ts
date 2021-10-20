/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';

export type price = {
    /**
     * SKU Code
     */
    skuCode: string;
    /**
     * Organization Id
     */
    organizationId: string;
    price: priceProperty;
    /**
     * Percent (5 digits precision, 5 pre-decimal digits)
     */
    percent?: number | null;
}
