// Оновлення превью в реальному часі
function update() {
    document.getElementById('outName').innerText = document.getElementById('inName').value || "Ваше Ім'я";
    document.getElementById('outJob').innerText = document.getElementById('inJob').value || "Ваша Посада";
    document.getElementById('outEmail').innerText = document.getElementById('inEmail').value || "email@example.com";
    document.getElementById('outAbout').innerText = document.getElementById('inAbout').value || "Тут з'явиться опис...";
}

// Зміна тем
function setTheme(themeName) {
    const canvas = document.getElementById('resume-canvas');
    canvas.className = 'resume-page ' + themeName;
}

// Генерація PDF
function downloadPDF() {
    const element = document.getElementById('resume-canvas');
    const opt = {
        margin:       0,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}
