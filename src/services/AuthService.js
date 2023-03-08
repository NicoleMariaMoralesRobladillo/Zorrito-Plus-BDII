import Api from "@/services/setAuthHeader";

export default{
    sendCredentials(params){
        return Api().post('/login', params);
    }
}