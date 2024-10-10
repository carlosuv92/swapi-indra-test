import { getPeopleController } from '../src/adapters/http/peopleController';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getPeople } from '../src/aplications/services/peopleService';
import { mockPeopleData } from './mocks/peopleMock';
// Mockeamos el servicio getPeople
jest.mock('../src/aplications/services/peopleService', () => ({
    getPeople: jest.fn(),
}));

describe('getPeopleController', () => {
    let consoleErrorSpy: jest.SpyInstance;
    beforeEach(() => {
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });

    it('should return 200 and the person data when given a valid id', async () => {
        // Configuramos el mock para que devuelva un objeto de persona
        (getPeople as jest.Mock).mockResolvedValue(mockPeopleData);

        const event: APIGatewayProxyEvent = {
            pathParameters: { id: '1' },
            body: null,
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '/people/1',
            queryStringParameters: null,
            requestContext: {} as any,
        } as any;

        const result = await getPeopleController(event, null);

        expect(result.statusCode).toBe(200);
        expect(typeof result.body).toBe('string');

        const body = JSON.parse(result.body);
        expect(body).toHaveProperty('name', 'Luke Skywalker'); // Verificamos que el nombre sea correcto
    });

    it('should return 500 when an error occurs', async () => {
        // Configuramos el mock para que arroje un error
        (getPeople as jest.Mock).mockRejectedValue(new Error('Error getting people'));

        const event: APIGatewayProxyEvent = {
            pathParameters: { id: 'invalid_id' },
            body: null,
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '/people/invalid_id',
            queryStringParameters: null,
            requestContext: {} as any,
        } as any;

        const result = await getPeopleController(event, null);

        expect(result.statusCode).toBe(500);
        expect(result.body).toContain('Error getting people');
    });
});
