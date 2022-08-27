
export interface Person {
    "id": number,
    "name": string,
    "title": string,
    "about": string,
    "profileimg": string,
    "email": string,
    "province":{
        "id": number,
        "name": string
    }
    "location": {
        "id":number,
        "provinceId": number,
        "name": string
    }

} 