document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const submitBtn = document.getElementById('submitBtn');
    const resultDiv = document.getElementById('result');
    const body = document.body; // Get the body element

    // Add mouseenter and mouseleave event listeners to the body
    body.addEventListener('mouseenter', () => {
        body.classList.add('hover-effect');
    });

    body.addEventListener('mouseleave', () => {
        body.classList.remove('hover-effect');
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
