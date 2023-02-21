(function()
{
    'use strict';
    console.log('reading js');
    
    document.getElementById('input0submit').addEventListener('click', toInput1);
    document.getElementById('input1submit').addEventListener('click', toInput2);
    document.getElementById('input2submit').addEventListener('click', toInput3);
    document.getElementById('input3submit').addEventListener('click', toInput4);
    document.getElementById('input4submit').addEventListener('click', toInput5);
    document.getElementById('input5submit').addEventListener('click', toInput6);
    document.getElementById('input6submit').addEventListener('click', toInput7);
    document.getElementById('input7submit').addEventListener('click', toInput8);

    document.getElementById('input1back').addEventListener('click', toInput0);
    document.getElementById('input2back').addEventListener('click', toInput1);
    document.getElementById('input3back').addEventListener('click', toInput2);
    document.getElementById('input4back').addEventListener('click', toInput3);
    document.getElementById('input5back').addEventListener('click', toInput4);
    document.getElementById('input6back').addEventListener('click', toInput5);
    document.getElementById('input7back').addEventListener('click', toInput6);
    document.getElementById('input8back').addEventListener('click', toInput7);

    const myForm = document.querySelector('#myform');
    const paintingCap = document.querySelector('#caption1');
    const photoCap = document.querySelector('#caption2');
    const aestheticUser = document.querySelector('#username2');
    const blogUser = document.querySelector('#username3');
    const blogBio = document.querySelector('#bio');
    const paintingTag = document.querySelector('#hashtag');

    let textPaintingCap; 
    let textPhotoCap; 
    let textAestheticUser; 
    let textBlogUser; 
    let textBlogBio; 
    let textPaintingTag; 

    function toInput0(event)
    {
        event.preventDefault();
        document.getElementById('welcome-view').className = 'showing';
        document.getElementById('input1').className = 'hidden';
    }

    function toInput1(event)
    {
        event.preventDefault();
        document.getElementById('input1').className = 'showing';
        document.getElementById('welcome-view').className = 'hidden';
        document.getElementById('input2').className = 'hidden';
    }

    function toInput2(event)
    {
        event.preventDefault();
        document.getElementById('input2').className = 'showing';
        document.getElementById('input1').className = 'hidden';
        document.getElementById('input3').className = 'hidden';
    }

    function toInput3(event)
    {
        event.preventDefault();
        document.getElementById('input3').className = 'showing';
        document.getElementById('input2').className = 'hidden';
        document.getElementById('input4').className = 'hidden';
    }

    function toInput4(event)
    {
        event.preventDefault();
        document.getElementById('input4').className = 'showing';
        document.getElementById('input3').className = 'hidden';
        document.getElementById('input5').className = 'hidden';
    }

    function toInput5(event)
    {
        event.preventDefault();
        document.getElementById('input5').className = 'showing';
        document.getElementById('input4').className = 'hidden';
        document.getElementById('input6').className = 'hidden';
    }

    function toInput6(event)
    {
        event.preventDefault();
        document.getElementById('input6').className = 'showing';
        document.getElementById('input5').className = 'hidden';
        document.getElementById('input7').className = 'hidden';
    }

    function toInput7(event)
    {
        event.preventDefault();
        document.getElementById('input7').className = 'showing';
        document.getElementById('input6').className = 'hidden';
        document.getElementById('input8').className = 'hidden';
    }

    function toInput8(event)
    {
        event.preventDefault();
        document.getElementById('input7').className = 'hidden';
        document.getElementById('input8').className = 'showing';
    }

    myForm.addEventListener('submit', function(event)
    {
        event.preventDefault();
        document.getElementById('results-view').className = 'showing';
        document.getElementById('input-view').className = 'hidden';
        document.getElementById('tumblr').className = 'hidden';
        document.getElementById('info').className = 'hidden';
        const artist = document.querySelector('#artist').value;
        const year = document.querySelector('#year').value;
        const adjective = document.querySelector('#adjective').value;
        const month = document.querySelector('#month').value;
        const verb = document.querySelector('#verb').value;
        const noun = document.querySelector('#noun').value;
        const aesthetic = document.querySelector('#aesthetic-word').value;
        const painting = document.querySelector('#painting-style').value;

        if (artist && year && adjective && month && verb && noun && aesthetic && painting) 
        {
            textPaintingCap = `Still life in a still life - ${artist}, ${year}.`; 
            textPhotoCap = `${adjective} flowers, ${month} 2019`; 
            textAestheticUser = `${aesthetic}`; 
            textBlogUser = `${verb}-${noun}`; 
            textBlogBio = `you're telling me a duck ${verb} this ${noun}`; 
            textPaintingTag = `#${painting} art`; 
        }
        else
        {
            alert('Please complete the form')
            document.getElementById('results-view').className = 'hidden';
            document.getElementById('tumblr').className = 'showing';
            document.getElementById('info').className = 'showing';
        }

        paintingCap.innerHTML = textPaintingCap;
        photoCap.innerHTML = textPhotoCap;
        aestheticUser.innerHTML = textAestheticUser;
        blogUser.innerHTML = textBlogUser;
        blogBio.innerHTML = textBlogBio;
        paintingTag.innerHTML = textPaintingTag;
    })
}())