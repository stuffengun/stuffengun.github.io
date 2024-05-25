
function GoIframe(url)
{

    console.log(document.getElementById("ifm").id);

    document.getElementById("ifm").src=url;
    console.log(url);
    console.log("이동");
}

function GoIframe(url)
{

    console.log(document.getElementById("ifm").id);

    document.getElementById("ifm").src=url;
    console.log(url);
    console.log("이동");
}

function ChildHide(clicked)
{
 console.log(clicked);
 console.log(clicked.childNodes)

 
 clicked.childNodes.forEach( child=> {
    if (child.classList?.contains('Innerli')&&(child.style.display ==='show')) {
        child.style.display = 'none';
    }
    else
    {
        child.style.display = 'show';
    }
 });
}