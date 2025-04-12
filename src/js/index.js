document.addEventListener("DOMContentLoaded", () => {
    
    const token = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    
    if(!token && !window.location.href.includes('login.html')) {
        window.location.href = '/pages/login.html'
        console.log("login yoki registir qiling");
    }

})