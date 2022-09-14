
const container = document.querySelector('.container');
const text = document.querySelector('#text');
const totalTime = 16000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


function breatheAnimation() {
    text.innerHTML = 'Breathe In';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out...';
            container.className = 'container shrink'
        }, holdTime)


    }, breatheTime)

};

breatheAnimation();

setInterval(breatheAnimation, totalTime);

function changeTheme()
    {
        var e = document.getElementById("drop");
        var strUser = e.options[e.selectedIndex].value;
        if (strUser == "night")
        {
            document.body.style.backgroundImage = "url('./images/soothe.jpg')";
        }
        if (strUser == "day")
        {
            document.body.style.backgroundImage = "url('./images/tranday.jpg')";
        }
    }