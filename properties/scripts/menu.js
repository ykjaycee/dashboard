const menuBtn = document.querySelectorAll('.menuBtn');

menuBtn.forEach(button => {
    button.addEventListener('click', (e) => {
        const mm = button.value;
        console.log(mm);
    })
});