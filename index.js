console.log("Hello, world!");

function run() {
    let html = document.getElementById('html').value;
    let css = document.getElementById('css').value;
    let js = document.getElementById('js').value;
    let output = document.getElementById('output');

    css = "<style>" + css + "</style>";
    js = "<script>" + js + "</script>";

    output.contentDocument.body.innerHTML = html + css + js;

    // Unique animation
    output.animate(
        [
            { transform: 'scale(0)' },
            { transform: 'scale(1)', offset: 1 }
        ],
        {
            duration: 1000,
            easing: 'ease-in-out'
        }
    );
}
