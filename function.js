var button = document.getElementById('hide-panel');
    var panel = document.querySelector('#see-more .panel');

    button.addEventListener('click', function() {
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });