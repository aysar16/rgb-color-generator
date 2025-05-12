const colorBox = document.getElementById('colorBox');
const colorCode = document.getElementById('colorCode');
const copyBtn = document.getElementById('copyBtn');
const generateBtn = document.getElementById('generateBtn');

const generateColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `${r}, ${g}, ${b}`;
}

const updateColor = () => {
    let code = generateColor();
    let primaryColor = 'rgb(' + code + ')';
    let secondaryColor = 'rgba(' + code + ', 0.1)';

    colorBox.style.backgroundColor = primaryColor;
    document.body.style.color = primaryColor;
    colorCode.textContent = primaryColor;
    document.body.style.backgroundColor = secondaryColor;
}

updateColor();

generateBtn.addEventListener("click", () => {
    updateColor();
});

copyBtn.addEventListener('click', () => {
    const originalText = copyBtn.textContent;
    
    navigator.clipboard.writeText(colorCode.innerText)
        .then(() => {
            copyBtn.textContent = "Copied!";
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 1500);
        })
        .catch(err => {
            console.error('Copy failed:', err);
        });
});