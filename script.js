function showSweetAlert() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, block it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Block!',
                'Record has been successfully block.',
                'success'
            )
        }
    })
}
function myFunction() {
    var body = document.body;
    var root = document.documentElement;

    if (body.dataset.bsTheme === "light") {
        body.dataset.bsTheme = "dark";
        root.classList.add('dark-theme-variables');
    } else {
        body.dataset.bsTheme = "light";
        root.classList.remove('dark-theme-variables');
    }
}

document.addEventListener("mousemove",function (e){
    let body=document.querySelector("body");
    let circle=document.createElement("div"); // Sử dụng div thay vì span
    circle.classList.add('colorful-bubble'); // Thêm lớp bubble cho div
    let x=e.clientX
    let y=e.clientY;
    circle.style.left=x+"px";
    circle.style.top=y+"px";
    let size=Math.random() * 50;
    circle.style.width=5+size+"px";
    circle.style.height=5+size+"px";
    body.appendChild(circle);
    setTimeout(function (){
        circle.remove();
    },1800);
});