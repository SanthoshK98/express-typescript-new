// import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import express from 'express';
const app = express();
import serverless from 'serverless-http';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

// export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//     let response: APIGatewayProxyResult;
//     try {
//         response = {
//             statusCode: 200,
//             body: JSON.stringify({
//                 message: 'hello world',
//             }),
//         };
//     } catch (err: unknown) {
//         console.log(err);
//         response = {
//             statusCode: 500,
//             body: JSON.stringify({
//                 message: err instanceof Error ? err.message : 'some error happened',
//             }),
//         };
//     }

//     return response;
// };

app.get('/express', (req, res) => {
    res.send('Hello Typescript World Again and Again');
});

app.listen(5000, () => {
    console.log(`Listening on PORT 5000`);
});

export const handler = serverless(app);
