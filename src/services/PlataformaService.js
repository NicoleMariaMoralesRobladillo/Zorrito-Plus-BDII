import Api from "@/services/setAuthHeader";

export default{
    getPlataformas(){
        return Api().get('/plataforma');
    }
}