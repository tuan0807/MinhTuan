var btn_xoa = document.getElementsByClassName("btn-danger");
for (let i = 0; i<btn_xoa.length; i++){
    var btn = btn_xoa[i];
    btn.addEventListener("click", function (e){
        var btn_remove = e.target as HTMLButtonElement;
        btn_remove.parentElement.parentElement.remove();
    })
}