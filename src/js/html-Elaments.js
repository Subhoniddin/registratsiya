const successToast = document.getElementById("toast-success")
const errorToast = document.getElementById("toast-danger")
const warningToast = document.getElementById("toast-warning")
const loading = document.getElementById("loading")
const formRegister = document.getElementById("formRegister")


function msgEl(parent, selektr, msg) {
    const msgEl = parent.querySelector(selektr);
    msgEl.textContent = msg
}

export {
    successToast,
    errorToast,
    warningToast,
    msgEl,
    loading,
    formRegister
}