// Зміна стилю аркуша
function changeStyle(styleName) {
    const resume = document.getElementById('resume');
    resume.className = 'resume-sheet ' + styleName;
}

// "AI" Рерайтер
function improveAI(tone) {
    const selection = window.getSelection();
    if (!selection.toString()) {
        alert("Спершу виділіть текст, який хочете змінити!");
        return;
    }

    let text = selection.toString();
    
    // Симуляція логіки AI
    if (tone === 'pro') {
        text = "Маю значний досвід у сфері та високий рівень професійної експертизи. " + text.replace(/я/g, "фахівець");
    } else if (tone === 'chill') {
        text = "Привіт! Я творча людина, обожнюю круті виклики та драйвову роботу. ✨ " + text;
    }

    // Заміна виділеного тексту
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
}

// Експорт
function exportPDF() {
    const element = document.getElementById('resume');
    const opt = {
        margin: 0,
        filename: 'my_resume.pdf',
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}
