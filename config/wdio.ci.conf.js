import { config } from './wdio.shared.conf'

config.capabilities.push(
    {
        browserName: 'chrome',
        'wdio:devtoolsOptions': {
            headless: true
        }
    }
)

exports.config = config;
