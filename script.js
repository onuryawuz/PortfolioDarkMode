const container = document.querySelector('.container');

// Container elementinin varlığını kontrol edin
if (container) {
    const cloneContainer = container.cloneNode(true);
    cloneContainer.id = 'dark-container';
    document.body.appendChild(cloneContainer);
    cloneContainer.classList.remove('active');
    console.log('Container cloned successfully');

    const toggleIcons = document.querySelectorAll('.toggle-icon');
    const icons = document.querySelectorAll('.toggle-icon i');
    const darkContainer = document.querySelector('#dark-container');
    const darkContainerImg = document.querySelector('#dark-container .home-img img');

    // Dark container içindeki img elementinin varlığını kontrol edin
    if (darkContainerImg) {
        darkContainerImg.src = 'imgDark.jpg';
        console.log('Dark container image set successfully');
    } else {
        console.error('Dark container image not found');
    }

    if (toggleIcons.length > 0 && icons.length > 0) {
        toggleIcons.forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.classList.add('disabled');
                setTimeout(() => {
                    toggle.classList.remove('disabled');
                }, 1500);

                icons.forEach(icon => {
                    icon.classList.toggle('bi');
                    icon.classList.toggle('bi-sun');
                });

                container.classList.toggle('active');
                darkContainer.classList.toggle('active');
            });
        });
        console.log('Toggle event listeners added successfully');
    } else {
        console.error('Toggle icons or icon elements not found');
    }
} else {
    console.error('Container element not found');
}
