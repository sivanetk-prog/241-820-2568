const BASE_URL = "http://localhost:8000";

let mode = 'CREATE';
let selectId = '';

window.onload = async () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    console.log('id', id);

    if (id) {

        mode = 'EDIT';
        selectId = id;

        try {

            const response = await axios.get(`${BASE_URL}/users/${id}`);
            const user = response.data;

            console.log('response', user);

            const firstNameDOM = document.querySelector('input[name=firstname]');
            const lastNameDOM = document.querySelector('input[name=lastname]');
            const ageDOM = document.querySelector('input[name=age]');
            const descriptionDOM = document.querySelector('textarea[name=description]');
            const genderDOMs = document.querySelectorAll('input[name=gender]');
            const interestDOMs = document.querySelectorAll('input[name=interests]');

            firstNameDOM.value = user.firstname || '';
            lastNameDOM.value = user.lastname || '';
            ageDOM.value = user.age || '';
            descriptionDOM.value = user.description || '';

            // set gender
            genderDOMs.forEach(gender => {
                if (gender.value === user.gender) {
                    gender.checked = true;
                }
            });

            // set interests
            if (user.interests) {
                interestDOMs.forEach(interest => {
                    if (user.interests.includes(interest.value)) {
                        interest.checked = true;
                    }
                });
            }

        } catch (error) {

            console.error('Error fetching user data:', error);

        }

    }

};

const validateData = (userData) => {

    let errors = [];

    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }

    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }

    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }

    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }

    if (userData.interests.length === 0) {
        errors.push('กรุณาเลือกงานอดิเรก');
    }

    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }

    return errors;

};

const submitData = async () => {

    const firstNameDOM = document.querySelector('input[name=firstname]');
    const lastNameDOM = document.querySelector('input[name=lastname]');
    const ageDOM = document.querySelector('input[name=age]');
    const genderDOM = document.querySelector('input[name=gender]:checked');
    const interestDOMs = document.querySelectorAll('input[name=interests]:checked');
    const descriptionDOM = document.querySelector('textarea[name=description]');
    const messageDOM = document.getElementById('message');

    try {

        let interests = [];

        interestDOMs.forEach(interest => {
            interests.push(interest.value);
        });

        const userData = {
            firstname: firstNameDOM.value,
            lastname: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM ? genderDOM.value : '',
            description: descriptionDOM.value,
            interests: interests
        };

        console.log('submitData', userData);

        const errors = validateData(userData);

        if (errors.length > 0) {
            throw {
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors: errors
            };
        }

        let response;

        if (mode === 'CREATE') {

            response = await axios.post(`${BASE_URL}/users`, userData);

        } else {

            response = await axios.put(`${BASE_URL}/users/${selectId}`, userData);

        }

        console.log('response', response);

        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDOM.className = 'message success';

    } catch (error) {

        console.log('error message', error.message);

        if (error.response) {
            error.message = error.response.data.message;
            error.errors = error.response.data.errors;
        }

        let htmlData = '<div>';
        htmlData += `<div>${error.message}</div>`;
        htmlData += '<ul>';

        if (error.errors) {

            error.errors.forEach(err => {
                htmlData += `<li>${err}</li>`;
            });

        }

        htmlData += '</ul>';
        htmlData += '</div>';

        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';

    }

};
