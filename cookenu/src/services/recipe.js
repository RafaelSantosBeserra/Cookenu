import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createRecipe = (body, clear, setIsloading) => {
    setIsloading(true)
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((res) => {
        alert(res.data.message)
        clear()
        setIsloading(false)
    })
    .catch((err) => {
        setIsloading(false)
        alert(err.response.message)
    })
}