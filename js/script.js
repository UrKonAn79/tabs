const tabHeaderItems = document.querySelectorAll('.tab-header__item');
const marker =document.querySelector('.tab-header__marker ');
const items = document.querySelectorAll('.tab-content-item');

moveMarker(tabHeaderItems[0]);

function moveMarker(t) {
    marker.style.width = t.clientWidth + 'px';
    marker.style.left = t.offsetLeft + 'px';
}

function hideTab() {
    for(let i = 0; i < items.length; i++) {
        if(items[i].classList.contains('show')) {
            items[i].classList.remove('show');
            break;
        }
    }
}

for(let i = 0; i < tabHeaderItems.length; i++) {
    tabHeaderItems[i].addEventListener('click', function(event) {
        moveMarker(event.target);
        hideTab();
        items[i].classList.add('show');
    });
}