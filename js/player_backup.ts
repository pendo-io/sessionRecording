let mainContent:HTMLElement;

const createMainContent = () => {
    const container: HTMLElement | null = document.getElementById('container');
    if(container !== null) {

        const image: HTMLElement = document.createElement('img');
        image.setAttribute('src', './images/phone.svg');
        image.style.width = '400px'
        container.appendChild(image);

        //Main container
        mainContent = document.createElement('div');
        mainContent.style.position = 'absolute';
        mainContent.style.border = 'solid 1px black';
        mainContent.style.width = '315px';
        mainContent.style.height = '561px';
        mainContent.style.top = '54px';
        container.appendChild(mainContent);

        const btn = createButton({ text: "hello", fontFamily: "arial", fontStyle: "bold", fontColor: "#FFFFFF" })
        mainContent.appendChild(btn);
    }
}

const createButton = (btnJson : any) : HTMLElement => {
    const btn = document.createElement('button');
    btn.innerText = btnJson.text;
    btn.style.fontFamily = btnJson.fontFamily;
    btn.style.fontStyle = btnJson.fontStyle;
    btn.style.color = btnJson.fontColor;

    return btn;
}
window.onload = createMainContent;

