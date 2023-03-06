import Api from "@/services/Api";

export default{
    getPlataformas(){
        return Api().get('/plataforma');
    }
}