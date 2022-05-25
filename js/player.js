let mainContent;
const createMainContent = () => {
    const container = document.getElementById('container');
    if (container !== null) {

        const image = document.createElement('img');
        image.setAttribute('src', './images/phone.svg');
        image.style.width = '600px'
        container.appendChild(image);

        //Main container
        mainContent = document.createElement('div');
        mainContent.style.position = 'absolute';
        mainContent.style.overflow = 'hidden';
        mainContent.style.width = '390px';
        mainContent.style.height = '844px';
        mainContent.style.top = '75px';

        container.appendChild(mainContent);

        //PARSE AND BUILD
        parseAndBuild(json1, mainContent)
    }
}


window.onload = createMainContent;

