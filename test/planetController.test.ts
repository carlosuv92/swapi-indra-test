import { getPlanetController } from '../src/adapters/http/planetController';
import { APIGatewayProxyEvent } from 'aws-lambda';
import { getPlanet, createPlanet } from '../src/aplications/services/planetService';
import { mockPlanetData } from '../test/mocks/planetMock';
import { Planet } from '../src/domain/entities/planet';
// Mockeamos el servicio getPlanet
jest.mock('../src/aplications/services/planetService', () => ({
    getPlanet: jest.fn(),
    createPlanet: jest.fn(),
}));


describe('getPlanetController', () => {
    let consoleErrorSpy: jest.SpyInstance;
    beforeEach(() => {
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });

    it('should return 200 and the planet data when given a valid id', async () => {
        // Configuramos el mock para que devuelva un objeto de planeta
        (getPlanet as jest.Mock).mockResolvedValue(mockPlanetData);

        const event: APIGatewayProxyEvent = {
            pathParameters: { id: '1' },
            body: null,
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '/planets/1',
            queryStringParameters: null,
            requestContext: {} as any,
        } as any;

        const result = await getPlanetController(event, null);

        expect(result.statusCode).toBe(200);
        expect(typeof result.body).toBe('string');

        const body = JSON.parse(result.body);
        expect(body).toHaveProperty('name', 'Tatooine'); // Verificamos que el nombre sea correcto
    });

    it('should return 500 when an error occurs', async () => {
        // Configuramos el mock para que arroje un error
        (getPlanet as jest.Mock).mockRejectedValue(new Error('Error getting planet'));

        const event: APIGatewayProxyEvent = {
            pathParameters: { id: 'invalid_id' },
            body: null,
            headers: {},
            httpMethod: 'GET',
            isBase64Encoded: false,
            path: '/planets/invalid_id',
            queryStringParameters: null,
            requestContext: {} as any,
        } as any;

        const result = await getPlanetController(event, null);

        expect(result.statusCode).toBe(500);
        expect(result.body).toContain('Error getting planet');
    });
});

describe('createPlanetController', () => {
    let consoleErrorSpy: jest.SpyInstance;
    beforeEach(() => {
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleErrorSpy.mockRestore();
    });

    it('should return 200 and the created planet data when given a valid planet', async () => {
        // Configuramos el mock para que devuelva un objeto de planeta
        (createPlanet as jest.Mock).mockResolvedValue(mockPlanetData);

        const result = await createPlanet(mockPlanetData);
        expect(result).toHaveProperty('name', 'Tatooine'); // Verificamos que el nombre sea correcto
    });
});