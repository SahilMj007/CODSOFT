var string = "";
var buttons = document.querySelectorAll(".btn");

buttons.forEach(button_run);

function button_run(buttons)
{
buttons.addEventListener("click", cal);
}

function cal()
{
    if(this.innerHTML === "=")
    {
        string = string.replace(/÷/g, '/');
        string = string.replace(/x/g, '*');
        string = eval(string);
        document.querySelector("input").value = string;
    }
    else if(this.innerHTML == "C")
    {
        string = "";
        document.querySelector("input").value = string;
    }
    else if(this.querySelector('i.fa-delete-left'))
    {
        string = string.slice(0, -1);
        document.querySelector("input").value = string;

    }
    else
    {
    string = string + this.innerHTML;
    document.querySelector("input").value = string;
    }
    
}

