/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';
import type { steppedPrice } from './steppedPrice';

export type price = {
    /**
     * SKU Code
     */
    skuCode: string;
    /**
     * Customer Id
     */
    customerId: string;
    /**
     * Price
     */
    price?: priceProperty | null;
    /**
     * Percent (5 digits precision, 5 pre-decimal digits)
     */
    percent?: number | null;
    /**
     * Stepped Prices
     */
    steppedPrices?: Array<steppedPrice> | null;
}
