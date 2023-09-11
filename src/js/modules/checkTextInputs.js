const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });

        input.addEventListener('input', (e) => {
            console.log(e.target.value)
            if (e.target.value.search(/^[a-z]/ig) > -1) {
                e.target.value = ''
            } else {
                e.target.value = e.target.value;
            };
        });
       
    });
};

export default checkTextInputs;