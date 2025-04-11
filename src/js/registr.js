
const token = JSON.parse(localStorage.getItem('user')) || null;
if(!token &&  !window.location.href.includes('login.html')) {
    window.location.href = 'http://127.0.0.1:5500/pages/login.html'
    console.log("login yoki registir qiling");
} else if(token && !window.location.href.includes('index.html') ) {
    window.location.href = 'http://127.0.0.1:5500/index.html'
}

const formRegister = document.getElementById("formRegister")

formRegister.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(formRegister)
    let formObj = {};
    formData.forEach((value, key) => formObj[key] = value); 
    
    async function registr() {
    let req =  await fetch("https://json-api.uz/api/project/fn37/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formObj)
        });
        let res = await req.json()
        console.log(req);
        
   }
   registr()
   formRegister.reset()
})