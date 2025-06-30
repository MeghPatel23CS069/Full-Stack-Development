var random_votes=0
var manual_votes=0
var js=0
var python=0
var java=0

const increment_vote = (num) => {
    manual_votes++
        if(num=='1')
        {
            js++
        }
        if(num=='2')
        {
            python++
        }
        if(num=='3')
        {
            java++
        }
}

const clear_votes = () => {
    random_votes=0
    manual_votes=0
    js=0
    python=0
    java=0
}

const get_random_vote =()=> {
    random=Math.random()*10
    alert("The random number is "+random)
    random_votes++
    if(random<=3)
    {
        js++
    }
    else if(random<=6)
    {
        python++
    }
    else
    {
        java++
    }

}

function show(){

    content="Votes="+manual_votes+"\n"+"Java Script = "+js + "\n" + "Python = "+python+"\n"+"Java = "+java
    document.getElementById('Result').innerHTML=`
    <p>Total Votes = ${manual_votes+random_votes} </p>
    <p>Manual Votes = ${manual_votes} </p>
    <p>Random Votes = ${random_votes} </p>
    <p>Java Script = ${js} </p>
    <p>Python = ${python} </p>
    <p>Java = ${java} </p>
    `
    ;
}