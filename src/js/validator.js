import toast from "./toast.js";

function validator(formData) {

    let formObj = {};
    for (let [key, value] of formData.entries()) {
        if(value.trim() === "") {
            toast('error', `${key} Bo'lishi shart`);
            return false;
        }
        formObj[key] = value;
    }
    return formObj
}

export default validator