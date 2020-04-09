// function DeleteSite() {
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }

// function CreateSite(siteName, siteUrl) {
//     var para = document.createElement("div");
//     para.setAttribute("id", siteName);
//     para.setAttribute("class", "bookmarkListRow d-flex flex-row");
//     document.getElementById("bookmarkList").appendChild(para);

//     var para = document.createElement("h3");
//     para.innerHTML = siteName;
//     para.setAttribute("class", "col");
//     document.getElementById(siteName).appendChild(para);

//     var para = document.createElement("a");
//     para.innerHTML = "Visit";
//     para.setAttribute("class", "btn btn-primary");
//     para.setAttribute("href", "http://" + siteUrl);
//     para.setAttribute("target", "_blank");
//     document.getElementById(siteName).appendChild(para);

//     var para = document.createElement("button");
//     para.innerHTML = "Delete";
//     para.setAttribute("class", "btn btn-danger");
//     para.addEventListener("click", function () {
//         var element = document.getElementById(siteName);
//         element.remove(siteName);
//     });
//     document.getElementById(siteName).appendChild(para);
// }

// function submit() {
//     //check
//     var siteName = document.getElementById("siteName").value;
//     var siteUrl = document.getElementById("siteUrl").value;
//     if (siteName == '' || siteUrl == '') {
//         document.getElementsByClassName("bookmark")[0]
//             .classList.add("was-validated");
//         return;
//     }

//     //create
//     CreateSite(siteName, siteUrl);
//     //////////////clear
//     document.getElementsByClassName("bookmark")[0]
//         .classList.remove("was-validated");
//     document.getElementById("siteName").value = '';
//     document.getElementById("siteUrl").value = '';
// }

var sitesList = [];
var nameInput = document.getElementById("siteName");
var urlInput = document.getElementById("siteUrl");
var inputs = document.getElementsByClassName("form-control");

var add = document.getElementById("addBtn");
add.onclick = function () {
    addSite();
    DisplaySites();
    restForm();
}

function addSite() {
    var newsite = {
        siteName: nameInput.value,
        siteUrl: urlInput.value
    }

    sitesList.push(newsite);
}

function restForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}


function DisplaySites() {
    var trs = "";
    for (var i = 0; i < sitesList.length; i++) {
        trs += "<tr><td>" + sitesList[i].siteName + "</td><td align='right'><a class='btn btn-primary' href=http://" + sitesList[i].siteUrl + " target='_blank'>Visit</a></td><td><button onclick=deleteSite('"+ i +"') class='btn btn-danger'>Delete</button></td></tr>";
    }
    document.getElementById("tbody").innerHTML = trs;
}

function deleteSite(index) {
    sitesList.splice(index,1);
    DisplaySites();
}