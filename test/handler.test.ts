import { APIGatewayEvent, Context } from 'aws-lambda';
import { handler } from '../src/handler';

describe('Unit test for handler', () => {
  it('verifies successful response', async () => {
    const event = {
      body: 'Test Body'
    } as APIGatewayEvent;
    const context = {} as Context;
    const result = await handler(event, context);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(`Queries: ${JSON.stringify(event.queryStringParameters)}`);
  });
});
