/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { priceProperty } from './priceProperty';

export type steppedPrice = {
    /**
     * Valid from Quantity
     */
    validFromQuantity: number;
    price: priceProperty;
}
