const comment = [];

document.querySelector('button').onclick = () => {
    let value = document.querySelector('input').value;
    comment.push(value);
    draw();
}

function draw() {
    let out = '';
    for (let i = 0; i < comment.length; i++) {
        out += `<li>${comment[i]}</li>`;
    }
    document.querySelector('ul').innerHTML = out;
}