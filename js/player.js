let mainContent;
let sizeFactor = 1;
const createMainContent = async () => {
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
        mainContent.style.display = 'flex';
        mainContent.style.flex = '1';
        mainContent.style.overflow = 'hidden';
        mainContent.style.width = (390*sizeFactor) + 'px';
        mainContent.style.height = (844*sizeFactor) + 'px';
        // mainContent.style.top = (80*sizeFactor) + 'px';

        container.appendChild(mainContent);

        //PARSE AND BUILD
        await play(eventsData);
        await sleep(2000);
        await play(piiData);
        // parseAndBuild(json1, mainContent)
    }
}


window.onload = createMainContent;

