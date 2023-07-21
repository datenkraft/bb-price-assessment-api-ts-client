/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';
import type { steppedPrice } from './steppedPrice';

export type price = {
    /**
     * SKU Code
     */
    skuCode?: string;
    /**
     * Price
     */
    price?: priceProperty | null;
    /**
     * Percent (5 digits precision, 5 pre-decimal digits) Used to calculate percentages of the transmitted
     * values, e.g. to calculate commissions.
     */
    percent?: number | null;
    /**
     * Stepped Prices
     */
    steppedPrices?: Array<steppedPrice> | null;
    /**
     * Start date from when on the price is valid. This price remains valid until a price with a more
     * recent validFrom date is found.
     */
    validFrom?: string;
}
