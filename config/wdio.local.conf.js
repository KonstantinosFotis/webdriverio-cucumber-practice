import { config } from './wdio.shared.conf'

config.capabilities.push(
    {
        maxInstances: 5,
        browserName: 'chrome',
        'cjson:metadata': {
            browser: {
                name: 'chrome',
                version: '104',
            },
            device: 'MacBook Pro 19',
            platform: {
                name: 'OSX',
                version: '10.12.6'
            }
        },
        acceptInsecureCerts: true,
    }
)

exports.config = config;

