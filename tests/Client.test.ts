import {ConfigOptions} from '@datenkraft/bb-base-api-ts-client';
import {PriceAssessmentApiClient} from '../dist';

describe.skip('Client Test (staging)', () => {
    test('Initialize and use the generated Client', (done) => {
        const configOptions: ConfigOptions = {
            clientId: process.env.DEV_CLIENT_ID_STAGING ?? '',
            clientSecret: process.env.DEV_CLIENT_SECRET_STAGING ?? '',
            oAuthTokenHost:
                'https://authentication-api.staging.backbone.datenkraft.info',
        };

        PriceAssessmentApiClient.init(
            configOptions,
            'https://price-assessment-api.staging.backbone.datenkraft.info/v1'
        )
            .then(() => {
                PriceAssessmentApiClient.Generated.PriceService.getPriceCollection('65ce660d-9ff0-4c13-925f-1137c76f13b0', 'test_sku_a')
                    .then((priceCollection) => {
                        expect(priceCollection).toEqual({
                            skuCode: 'test_sku_a',
                            customerId: '65ce660d-9ff0-4c13-925f-1137c76f13b0',
                            price: {
                                minorMicro: 110000000,
                                currency: 'EUR'
                            },
                            percent: null
                        });
                        done();
                    })
                    .catch((error) => {
                        done(error);
                    });
            })
            .catch((error) => {
                done(error);
            });
    });
});