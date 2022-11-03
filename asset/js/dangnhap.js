

var data = JSON.parse(localStorage.getItem('user'));
function login(frm){
    if(data.email != frm.email.value  || data.password !== frm.password.value){
        alert("Email hoặc mật khẩu không chinh xác")
        frm.email.focus();
        return false;
    }
    this.addEventListener("submit",function(e){
        e.preventDefault();
    });
    alert("Đăng nhập thành công");
    location.reload()
}
