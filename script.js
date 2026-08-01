let expression = '';
    const display = document.getElementById('display');
    function appendChar(char) {
    if (expression === '0' && char !== '.') expression = '';
    expression += char;
    display.textContent = expression;
    }
    function clearDisplay() { expression = ''; display.textContent = '0'; }
    function calculate() {
    try { const result = eval(expression); display.textContent = result; expression = String(result); }
    catch { display.textContent = 'Error'; expression = ''; }
    }
    document.addEventListener('keydown', (e) => {
    if ('0123456789+-*/.%'.includes(e.key)) appendChar(e.key);
    else if (e.key === 'Enter') calculate();
    else if (e.key === 'Backspace') { expression = expression.slice(0,-1); display.textContent = expression || '0'; }
    else if (e.key === 'Escape') clearDisplay();
    });