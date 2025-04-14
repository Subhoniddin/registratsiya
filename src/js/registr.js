import { formRegister, loading } from "./html-Elaments.js";
import registr from "./request.js";
import toast from "./toast.js";
import validator from "./validator.js";

const token = JSON.parse(localStorage.getItem('user')) || null;
let userLocation = window.location.href;
console.log(userLocation);


if((!token &&  (!userLocation.includes('login.html') || !userLocation.includes('registr.html'))) ) {
    userLocation = '/pages/login.html'
    console.log("login yoki registir qiling");
} else if(token && !userLocation.includes('index.html') ) {
    window.location.href = '/index.html'
}

formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submit');
    
    const formData = new FormData(formRegister)
    
    const cleanForm = validator(formData)
    if(cleanForm) {

        toast('success', "Muvaffaqqiyatli")
        let req = registr(cleanForm, 'https://json-api.uz/api/project/fn37/auth/register')
        if(req) {registr(cleanForm, 'https://json-api.uz/api/project/fn37/auth/login')}
        loading.classList.add('hidden')
    }

   formRegister.reset()
})