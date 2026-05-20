import axios from 'axios'

class RadiosService {
    private apiUrl: string;

    constructor() {
        this.apiUrl = 'https://radiosserver.vercel.app/api/radios';
    }

    async getRadios() {
        try {
            const response = await axios.get(this.apiUrl);
            return response.data;
        } catch (error) {
            console.error('Error fetching radios:', error);
            throw error;
        }
    }
}

export const radiosService = new RadiosService()