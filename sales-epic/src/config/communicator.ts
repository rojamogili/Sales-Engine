import axios from "axios";
export class Communicator {

    public Get(url, path, headers = {}) {
        return axios.get(url + '/' + path, { headers: { 'user-agent': 'sales-epic-service' } })
            .then(data => {
                return data.data
            })
            .catch((error) => {
                console.log("-----error occurred while fetching data----", error?.message)
            });
    }

    public Post(url, path, body) {
        return axios.post(url + '/' + path, body, 
            { headers: { 'user-agent': 'sales-epic-service',
                'accept': 'application/json',
                'cache-control': 'no-cache',
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': process.env.AUTH_TOKEN
            }}).then(data => {
                return JSON.parse(data.data)
            })
            .catch((error) => {
                console.log("-----error occurred while syncing the sales order data with third party application----", error?.message)
            });
    }
}