//Reg Exp 
function validate() {
    const Email = document.querySelector('#email').value;
    const PhoneNumber = document.querySelector('#phone-number').value;
    const PostCode = document.querySelector('#post-code').value;

    const emailRGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRGEX = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    const postRGEX = /^\d{4}$/;

    const emailResult = emailRGEX.test(Email);
    const phoneResult = phoneRGEX.test(PhoneNumber);
    const postResult = postRGEX.test(PostCode);

    if (emailResult == false) {
        alert('Email Invalid')
        return false;
    }

    if (phoneResult == false) {
        alert('Phone Number Invalid')
        return false;
    }

    if (postResult == false) {
        alert('Post Code Invalid')
        return false;
    }
    alert('All Input Valid 😊');
    return true;

    form.submit();
}