document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const businessList = document.getElementById('businessList');

    let isDragging = false;
    let startX;
    let currentX;
    let transformX = 0;
    const slideLimit = 1100;

    slider.addEventListener('mousedown', function (e) {
        isDragging = true;
        startX = e.clientX;
        slider.style.cursor = 'grabbing';
        console.log("isDragging")
    });

    slider.addEventListener('mousemove', function (e) {
        if (isDragging) {
            currentX = e.clientX;
            const deltaX = currentX - startX;
            transformX += deltaX;
   
            transformX = Math.max(-slideLimit, Math.min(transformX, slideLimit));
            businessList.style.transform = `translateX(${transformX}px)`;
            startX = currentX;
        }
        
    });

    slider.addEventListener('mouseup', function (e) {
        isDragging = false;
        slider.style.cursor = 'grab';
        console.log("grab")
    });
});