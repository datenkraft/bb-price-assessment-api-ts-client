/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { price } from './price';

export type getPriceCollectionResponse = Array<({
    /**
     * Customer Id
     */
    customerId?: string,
} & price)>;