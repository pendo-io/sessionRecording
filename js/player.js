let mainContent;
let sizeFactor = 1;
const createMainContent = () => {
    const container = document.getElementById('container');
    if (container !== null) {
        container.style.backgroundImage = './images/phone.svg';
        // const image = document.createElement('img');
        // image.setAttribute('src', './images/phone.svg');
        // image.style.width = (500 * sizeFactor) + 'px'
        // // image.style.height = '844px'
        // container.appendChild(image);

        //Main container
        mainContent = document.createElement('div');
        mainContent.style.position = 'absolute';
        mainContent.style.overflow = 'hidden';
        mainContent.style.width = (390*sizeFactor) + 'px';
        mainContent.style.height = (844*sizeFactor) + 'px';
        mainContent.style.top = (80*sizeFactor) + 'px';

        container.appendChild(mainContent);

        //PARSE AND BUILD
        play(eventsData);
        // parseAndBuild(json1, mainContent)
    }
}


window.onload = createMainContent;

