let mainContent;
const createMainContent = () => {
    const container = document.getElementById('container');
    if (container !== null) {

        const image = document.createElement('img');
        image.setAttribute('src', './images/phone.svg');
        image.style.width = '480px'
        container.appendChild(image);

        //Main container
        mainContent = document.createElement('div');
        mainContent.style.position = 'absolute';
        mainContent.style.overflow = 'hidden';
        mainContent.style.width = '312px';
        mainContent.style.height = '675.2px';
        mainContent.style.top = '60px';

        container.appendChild(mainContent);

        //PARSE AND BUILD
        parseAndBuild(json1, mainContent)
    }
}


window.onload = createMainContent;

