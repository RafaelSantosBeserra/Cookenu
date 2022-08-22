import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesList } from "../routes/coordinator";

export const login = (body, clear, navigate, setRightbuttonText, setIsloading) => {
  setIsloading(true)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token",res.data.token)
      clear()
      setIsloading(false)
      goToRecipesList(navigate)
      setRightbuttonText("Logout")
    })
    .catch((err) => {
      setIsloading(false)
      alert(err.response.data.messege)})
  }

export const singUp = (body, clear, navigate, setRightbuttonText, setIsloading) => {
  setIsloading(true)
  axios.post(`${BASE_URL}/user/signup`, body)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    setIsloading(false)
    goToRecipesList(navigate)
    setRightbuttonText("Logout")
  })
  .catch((err) => {
    setIsloading(false)
    alert(err.response.data.messege)})
}