document.addEventListener('DOMContentLoaded', () => {
    // 버튼 생성
    const button = document.createElement('button');
    button.textContent = 'Click Me';

    // 버튼 클릭 이벤트 리스너 추가
    button.addEventListener('click', () => {
        alert('사랑해 승주야');
    });

    // 버튼을 body에 추가
    document.body.appendChild(button);
});
