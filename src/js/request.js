import { loading } from "./html-Elaments.js";


async function registr(formObj, url) {
    let req =  await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formObj)
        });
        
        if(req.status === 200) {
            loading.classList.remove('hidden')
            let res = await req.json()
            localStorage.setItem("user", JSON.stringify(res))
           setTimeout(() => { window.location.href = 'http://127.0.0.1:5500/index.html'}, 2000)
            return true;
        }
        return false;
   }

   export default registr