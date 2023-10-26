/**
 * Test class for Logger
 * @author Rakhi Sasikumar (n516973)
 */

import logger from '../../../src/util/logger';

describe('Test suite forlLogger', () => {
  it('Test logger is working as expected when awsRequest ID is not available', () => {
    // Setting awsRequestId as empty in defaultMeta
    logger.defaultMeta = {};
    // Adding loggers
    logger.info('This is info test logline');
    logger.debug('This is debug test logline');
  });

  it('Test logger is working as expected when awsRequest ID is available', () => {
    // Setting awsRequestId in defaultMeta
    logger.defaultMeta = { awsRequestId: 'test' };
    // Adding loggers
    logger.info('This is info test logline');
    logger.debug('This is debug test logline');
  });
});
