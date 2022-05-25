const createButton = (btnJson) => {
    const btn = new Button(btnJson);
    btn.createElement();
    return btn.getElement();
}

const createDiv = (divJson) => {
    const div = new Div(divJson);
    div.createElement();
    return div.getElement();
}

const parseAndBuild = (viewsArray) => {
    if (viewsArray === null || viewsArray.length === 0) {
        return;
    } else {
        viewsArray.forEach(view => {
            // do something with element
            // types that need special handling
            // types that should be ignored
            // types that require merging
            switch (view.type) {
                case ViewTypes.UIButton:
                    const btn = createButton(view);
                    mainContent.appendChild(btn);
                    break;
                case ViewTypes.UILabel:

                    break;
                case ViewTypes.UIViewControllerWrapperView:
                case ViewTypes.UILayoutContainerView:
                case ViewTypes.UINavigationTransitionView:
                case ViewTypes.UIView:
                default:
                    const defaultDiv = createDiv(view);
                    mainContent.appendChild(defaultDiv);
            }
            parseAndBuild(view.views);
        });
    }
}