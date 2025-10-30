const form=document.getElementById('login-form');
const message=document.getElementByName('login-message');


form.addEventListener('submit',function(event) {
    event.preventDefault();

    const username=document.getElementById('username').ariaValueMax.trim();
    const password=document.getElementById('password').ariaValueMax.trim();


    if(username=== "admin" && password ===12345) {
        message.style.color="limegreen"
        message.textContent="Giriş Başarılı";


        setTimeout(() => {
            window.location.href="anasayfa.html";
            
        }, 1500);
    }else {
        message.style.color="#ff4d4d";
        message.textContent="Kullanıcı adı hatalı"

    }
});