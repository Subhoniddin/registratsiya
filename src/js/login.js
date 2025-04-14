import { loading } from "./html-Elaments.js";
import registr from "./request.js";
import toast from "./toast.js";
import validator from "./validator.js";

const token = JSON.parse(localStorage.getItem('user')) || null;
if(!token && !window.location.href.includes('login.html')) {
    window.location.href = '/pages/login.html'
    console.log("login yoki registir qiling");
} else if(token && !window.location.href.includes('index.html') ) {
    window.location.href = '/index.html'
}

const formLogin = document.getElementById("formLogin")

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(formLogin)
    
    const cleanForm = validator(formData);

    if(cleanForm) {
        const req = registr(cleanForm, 'https://json-api.uz/api/project/fn37/auth/login')
        req.then(res => {
            if(res) {
                toast('success', "Muvaffaqqiyatli") 
                setTimeout(() => {loading.classList.add('hidden')}, 2300)
            } else {
                toast('error', "Login parolni to'g'ri kiriting")
            }
        })
          
    }
    
   formLogin.reset()
})