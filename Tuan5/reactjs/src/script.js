//nút xóa
var btn_xoa = document.getElementsByClassName("btn-danger");
for (var i = 0; i<btn_xoa.length; i++){
    var btn = btn_xoa[i];
    btn.addEventListener("Click", function (e){
        var btn_remove = e.target;
        btn_remove.parentElement.parentElement.parentElement.remove();
    })
}



