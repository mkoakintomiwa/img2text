import axios from "axios";
var formdata = new FormData();

export default (endpointUrl: string, data: Record<string, any> = {})=>{
    for(let [key,value] of Object.entries(data)){
        formdata.append(key,value)
    }
    return axios({
        method: "POST",
        url: endpointUrl,
        headers: {
            "content-Type":"multipart/form-data"
        },
        "data": formdata
    })
}