function changeFontStyle(font) {
    document.execCommand('fontName', false, font);
}

function changeFontSize(size) {
    document.execCommand('fontSize', false, "7"); // HTML Font Sizes (1-7)
    document.querySelectorAll(".textbox *").forEach(el => {
        if (el.style.fontSize === "") {
            el.style.fontSize = size;
        }
    });
}

function changeAlignment(align) {
    document.execCommand('justify' + align);
}
