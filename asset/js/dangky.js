
function registeruser(frm){
    var user = {
     
    }
    var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (frm.user.value.length<4){
        alert("Tên không hợp lại vui lòng nhập lại");
        frm.user.focus();
        return false;
    }
    
    if (emailreg.test(frm.email.value)== false){
        alert("Email không hợp lệ vui lòng nhập lại");
        frm.email.focus();
        return false;
    }
    if (frm.password.value.length < 8){
        alert("Mật khẩu không hợp lệ");
        frm.password.focus();
        return false;
    }
    if (frm.password.value.length != frm.repeatpassword.value.length)
    {
        alert("Mật khẩu không khớp");
        frm.repeatpassword.focus();
        return false;
    }
    
    if (frm.address.value.length<10){
        alert("Địa chỉ không hợp lệ vui lòng nhập lại");
            frm.address.focus();
            return false;
        }
        this.addEventListener("submit",function(e){
            e.preventDefault();
        });
        user.password = frm.password.value;
        user.name = frm.user.value;
        user.email = frm.email.value;
        
        console.log(user);
        alert("Dữ Liệu đã được gửi đi");
        location.reload()
        var userjson = JSON.stringify(user);
        window.sessionStorage.setItem("user",userjson);
        return true;
}



