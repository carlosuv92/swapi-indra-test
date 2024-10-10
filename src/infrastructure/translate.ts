import { Translate } from '@aws-sdk/client-translate';

// Inicializa el cliente de Translate una vez
const translateClient = new Translate({
    region: 'us-east-1',
});

export const translate = async (text: string): Promise<string> => {
    const params = {
        Text: text,
        SourceLanguageCode: 'en',
        TargetLanguageCode: 'es',
    };

    try {
        const translateText = await translateClient.translateText(params).then((data) => {
            return validateString(data.TranslatedText);
        }).catch((error) => {
            console.error('Error translating text:', error);
            throw new Error('Error translating text');
        });

        return translateText;
    } catch (error) {
        console.error('Error translating text:', error);
        throw new Error('Error translating text');
    }
}

const validateString = (text: string | undefined): string => {
    if (typeof text !== 'string') {
        throw new Error('Text must be a string');
    }
    return text;
}
