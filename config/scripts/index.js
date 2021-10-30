function DarkModeController()
{
    var messages = document.getElementById("messageFlag");           // Dark mode flag
    var containers = document.getElementsByClassName("container");   // Containers

    if (messages.checked)
    {
        document.getElementById("body").style.backgroundColor = "#343434";      // Body BgC
        document.getElementById("header01").style.backgroundColor = "#202020";  // H1 BgC
        document.getElementById("header02").style.backgroundColor = "#282828";  // H2 BgC
        document.getElementById("footer").style.background = "#202020";         // Footer BgC
        document.getElementById("footer").style.color = "white" ;               // Footer FnC
        document.getElementById("link01").style.color = "white" ;               // Link01 FnC
        document.getElementById("link02").style.color = "white" ;               // Link02 FnC
        document.getElementById("link03").style.color = "white" ;               // Link03 FnC

        for (var i=0; i < containers.length; i++)
        {
            containers[i].style.backgroundColor = "#202020";    // Containers BgC
            containers[i].style.border = "1px solid #303030";   // Border BgC
        }

        return true;
    }

    else
    {
        window.location.reload(true);
        return true;
    }
}

function SaveData()
{
    var text = new ActiveXObject("Scripting.FileSystemObject");
    var save = text.CreateTextFile("preferences.txt", true)
}