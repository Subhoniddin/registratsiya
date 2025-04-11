document.addEventListener("DOMContentLoaded", () => {
    
    const token = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    
    if(!token && !window.location.href.includes('login.html')) {
        window.location.href = 'http://127.0.0.1:5500/pages/login.html'
        console.log("login yoki registir qiling");
    }

})