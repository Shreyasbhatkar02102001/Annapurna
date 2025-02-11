import axios from 'axios';

const BASE_URL = "http://localhost:8080/contact-us/";

class ContactUsService {
    getContactUs() {
        return axios.get(BASE_URL);
    }

    createContactUs(contactData) {
        return axios.post(`${BASE_URL}`, contactData);
    }

    getContactUsById(contactId) {
        return axios.get(`${BASE_URL}${contactId}`);
    }

    updateContactUs(contactData, contactId) {
        return axios.put(`${BASE_URL}${contactId}`, contactData);
    }

    deleteContactUs(contactId) {
        return axios.delete(`${BASE_URL}${contactId}`);
    }
}

const ContactUsServiceImpl = new ContactUsService();

export default ContactUsServiceImpl;
