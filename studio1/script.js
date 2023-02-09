(function()
{
    'use strict';
    console.log('reading js');
    
    document.querySelector('#input0submit').addEventListener('click', function(event)
    {
        event.preventDefault();
        document.getElementById('welcome-view').className = 'hidden';
        document.getElementById('input1').className = 'showing';
    })

    document.querySelector('#input8submit').addEventListener('click', function(event)
    {
        event.preventDefault();
        document.getElementById('input-view').className = 'hidden';
        document.getElementById('results-view').className = 'showing';
        document.getElementById('tumblr').className = 'hidden';
    })
}())