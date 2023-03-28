
// Set site's version and date
function LoadFooterText()
{
    const FooterVersion = "2.9.0";
    const FooterDate = "2021-2023";
    const FooterText = document.getElementById("creditText");

    FooterText.textContent = `Quick Access ${FooterVersion} Copyright © ${FooterDate} By Kellvyn Sampaio`;
}

function WebSearch()
{
    var Search = document.getElementById("searchBar").value;
    var Engine = document.getElementById("searchSelect").value

    if (Search != "")
    {
        (Engine == 1) ? window.location ="https://google.com/search?q=" + Search : window.location = "https://www.bing.com/search?q=" + Search;
    }

    else
    {
        window.alert("Digite algo para pesquisar!")
    }
}
