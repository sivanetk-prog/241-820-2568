const submitData = async () => {

    let firstNameDom = document.querySelector('input[name="firstName"]');
    let lastNameDom = document.querySelector('input[name="lastName"]');
    let ageDom = document.querySelector('input[name="age"]');
    let genderDom = document.querySelector('input[name="gender"]:checked');
    let interestDoms = document.querySelectorAll('input[name="interests"]:checked');
    let descriptionDom = document.querySelector('textarea[name="description"]');
    let messageDom = document.getElementById('message');

    try {

        let interests = '';
        for (let i = 0; i < interestDoms.length; i++) {
            interests += interestDoms[i].value;
            if (i !== interestDoms.length - 1) {
                interests += ', ';
            }
        }

        let userData = {
            firstName: firstNameDom.value,
            lastName: lastNameDom.value,
            age: ageDom.value,
            gender: genderDom ? genderDom.value : null,
            description: descriptionDom.value,
            interests: interests
        };

        console.log('User Data :', userData);

        const response = await axios.post('http://localhost:8000/user', userData);
        console.log('Response :', response.data);

        messageDom.innerText = "บันทึกข้อมูลสำเร็จ";
        messageDom.className = "message success";

    } catch (error) {

        console.log('Error :', error.response?.data?.message || error.message);

        messageDom.innerText = "เกิดข้อผิดพลาดในการบันทึกข้อมูล";
        messageDom.className = "message error";
    }
};
