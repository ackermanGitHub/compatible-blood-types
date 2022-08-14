const closeBtn = document.querySelector('.close-btn');
const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

const inputSelectorsId = ['A+_selector', 'A-_selector', 'B+_selector', 'B-_selector', 'AB+_selector', 'AB-_selector', 'O+_selector', 'O-_selector'];
inputSelectorsId.forEach(id => {
    document.getElementById(id+'-id').addEventListener('click', () => {
        console.log(id);
    })
})

toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar');
});
closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});