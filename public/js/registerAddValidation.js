window.onload = function () {

    const form = document.querySelector('.create-form');
    form.name.focus();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element =>{
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        })
        const errors = [];

        if (!form.name.value) {
            errors.push({ name: 'name', message: 'El campo nombre no puede estar vacio' });
            form.name.classList.add('is-invalid');
        }
        if (form.name.value.length < 2 || form.name.value === '') {           
            errors.push({ name: 'name', message: 'El campo nombre debe tener al menos 2 caracteres' });
            form.name.classList.add('is-invalid');
        }
        if (!form.surname.value) {
            errors.push({ name: 'name', message: 'El campo nombre no puede estar vacio' });
            form.surname.classList.add('is-invalid');
        }
        if (form.surname.value.length < 2 || form.name.value === '') {           
            errors.push({ name: 'name', message: 'El campo nombre debe tener al menos 2 caracteres' });
            form.surname.classList.add('is-invalid');
        }
        if (!form.tel.value) {
            errors.push({ name: 'name', message: 'El campo nombre no puede estar vacio' });
            form.tel.classList.add('is-invalid');
        }
        if (form.tel.value.length < 10 || form.name.value === '') {           
            errors.push({ name: 'name', message: 'El campo nombre debe tener al menos 2 caracteres' });
            form.tel.classList.add('is-invalid');
        }

        const path = form.image.value;

        const allowedExtensions = ['JPG', 'jpg', 'png', 'gif', 'jpeg'];

        const splitName = path.split('.');
        const extention = splitName[splitName.length - 1];

        if (!allowedExtensions.includes(extention)) {
            errors.push({ name: 'image', message: 'El formato de imagen debe ser .jpg , .jpeg, .png , .gif ' });
            form.image.classList.add('is-invalid');
        }
        errors.forEach(error => {
            const errorLabel = document.getElementById(`error-${error.name}`)
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        })
        if (errors.length === 0) {
            form.submit();
        }
    });
}
