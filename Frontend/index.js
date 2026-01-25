function submitData() {
    let firastNameDom = document.querySelector('input[name="firstName"]');
    let lastNameDom = document.querySelector('input[name="lastName"]');
    let ageDom = document.querySelector('input[name="age"]');
    let genderDom = document.querySelector('input[name="gender"]:checked');
    let interestDoms = document.querySelectorAll('input[name="interest"]:checked');
    let descriptionDom = document.querySelector('textarea[name="description"]');

    let interests = ''
    for (let i = 0; i < interestDoms.length; i++) {
        interests += interestDoms[i].value 
        if (i !== interestDoms.length -1) {
            interests += ', '
        }
    }

    let userData = {
        firstName: firastNameDom.value,
        lastName: lastNameDom.value,
        age: ageDom.value,
        gender: genderDom.value,
        descriptionDom: descriptionDom.value,
        interests: interests
    }
    console.log('submit data',userData);
}
    