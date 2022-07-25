import axios from 'axios'
const BaseUrl = axios.create({
    baseURL: 'https://preschool-api-with-swagger.herokuapp.com/api/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM4MmI5MTU1YjA0NDAyMDVkNmYyNjkiLCJpYXQiOjE2NTg3NDkyMzksImV4cCI6MTY1ODc0OTI5OX0.7QEyIkCs1cOB5Y0g2LGyQtsLktqDa4zC3khat7qMqG0'

    }
});
export default BaseUrl;




