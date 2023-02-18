let list = document.querySelectorAll('li');

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        let i = 0;
        list.forEach(e => {
            e.firstElementChild.firstElementChild.src = json[i].icon;
            e.firstElementChild.lastElementChild.textContent = json[i].category;
            e.lastElementChild.firstElementChild.textContent = json[i].score;
            i++;
        });
    });