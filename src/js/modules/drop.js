const drop = () => {
    // drag *
    // dragend *
    // dragenter - когда перетаскиваемый объект, перетаскивается над dropArea
    // dragexit *
    // dragleave - объект перетащили на пределы dropArea
    // dragover - объект зависает над dropArea
    // dragstart *
    // drop - пользователь отпустил кнопку мыши, объект отправлен в dropArea

    // * - срабатывают на элементе, который перестаскивается

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function hightLihgt(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unhightLihgt(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = 'white';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, () => hightLihgt(fileInput), false);
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(fileInput => {
            fileInput.addEventListener(eventName, () => unhightLihgt(fileInput), false);
        });
    });

    fileInputs.forEach(fileInput => {
        fileInput.addEventListener('drop', (e) => {
            fileInput.files = e.dataTransfer.files;
            let dots;
            const arr = fileInput.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            fileInput.previousElementSibling.textContent = name;
        });
    });
};

export default drop;