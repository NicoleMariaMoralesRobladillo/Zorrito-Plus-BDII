import Api from "@/services/Api";

export default{
    sendCredentials(params){
        return Api().post('/login', params);
    }
}