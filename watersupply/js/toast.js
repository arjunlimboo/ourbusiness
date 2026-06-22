function triggerToastNotification(message){

const toast =
document.getElementById(
'toastEngineAlert'
);

if(!toast) return;

toast.innerText = message;

toast.classList.add('reveal');

setTimeout(()=>{

toast.classList.remove(
'reveal'
);

},4000);

}