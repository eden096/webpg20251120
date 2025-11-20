document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultDiv = document.getElementById('result');
    const body = document.body;

    // Add mousemove event listener to the body
    body.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Create a radial gradient that follows the mouse
        body.style.background = `radial-gradient(circle at ${x}px ${y}px, #333 0%, #121212 25%)`;
    });

    submitBtn.addEventListener('click', () => {
        const name = nameInput.value;
        if (name) {
            resultDiv.textContent = `안녕하세요, ${name}님! 만나서 반갑습니다.`;
        } else {
            resultDiv.textContent = '이름을 입력해주세요.';
        }
    });

    nameInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            submitBtn.click();
        }
    });
});
