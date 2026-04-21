function update() {
    document.getElementById('outName').innerText = document.getElementById('inName').value || "Ваше Ім'я";
    document.getElementById('outJob').innerText = document.getElementById('inJob').value || "Посада";
    document.getElementById('outPhone').innerText = document.getElementById('inPhone').value || "+380...";
    document.getElementById('outLocation').innerText = document.getElementById('inLocation').value || "Місто";
    document.getElementById('outAbout').innerText = document.getElementById('inAbout').value || "Опис...";

    // Обробка навичок
    const skills = document.getElementById('inSkills').value.split(',');
    const list = document.getElementById('outSkillsList');
    list.innerHTML = "";
    skills.forEach(s => {
        if(s.trim()) {
            let li = document.createElement('li');
            li.innerText = s.trim();
            list.appendChild(li);
        }
    });
}

// AI Рерайтер (Симуляція)
function rewriteText(mode) {
    const textarea = document.getElementById('inAbout');
    let text = textarea.value;
    if (!text) return;

    // Словник для заміни (простий приклад "магії" JS)
    if (mode === 'pro') {
        text = "Досвідчений фахівець з високим рівнем відповідальності. " + text.replace("я вмію", "володію компетенціями у сфері");
    } else {
        text = "Привіт! Я дуже люблю свою справу і завжди відкритий до нових крутих проектів. " + text;
    }
    
    textarea.value = text;
    update();
}

function setTheme(theme) {
    document.getElementById('resume-canvas').className = 'resume-page ' + theme;
}

function downloadPDF() {
    const element = document.getElementById('resume-canvas');
    html2pdf().from(element).set({
        margin: 0,
        filename: 'resume_pro.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { format: 'a4', orientation: 'portrait' }
    }).save();
}
