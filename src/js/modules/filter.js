const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    no = document.querySelector('.portfolio-no');

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('anumated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('anumated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('anumated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('anumated', 'fadeIn');
        }
    };

    Array.from(menu.children).forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.classList[0] !== 'granddad' && e.target.classList[0] !== 'grandmother') {
                typeFilter(wrapper.querySelectorAll(`.${e.target.classList[0]}`))
            } else typeFilter();
        });
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName === 'LI') {
            items.forEach(btn => {
                btn.classList.remove('active');
                target.classList.add('active');
            });
        }
    });
};

export default filter;