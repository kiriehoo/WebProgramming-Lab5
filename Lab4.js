function ToggleModileNavBar() {
  var buttonsList = document.getElementById("mobileNavbarButtonsList");
  if (buttonsList) {
    var listClass = buttonsList.getAttribute("class");
    if (listClass == "mobileNavbarButtonsList")
      buttonsList.setAttribute("class", "mobileNavbarButtonsListHidden");
    else buttonsList.setAttribute("class", "mobileNavbarButtonsList");
  } else {
    console.log("Не найден список кнопок мобильной панели навигации!");
  }
}

function OnBtnNavBarMobileToggleClick() {
  ToggleModileNavBar();
}

function GenerateDB() {
  var db = new DB();
  db.Add(
    new Sneaker(
      "Air Jordan 1 Retro High 'University Blue'",
      "Мужксая обувь",
      "http://localhost/Lab4/images/sneaker1.png",
      49499
    )
  );
  db.Add(
    new Sneaker(
      "Nike Air Max Terrascape 90",
      "Обувь для скейтборда",
      "http://localhost/Lab4/images/sneaker2.png",
      17499
    )
  );
  db.Add(
    new Sneaker(
      "Nike Blazer Mid Vintage Edition",
      "Мужская обувь",
      "http://localhost/Lab4/images/sneaker3.png",
      6799
    )
  );
  db.Add(
    new Sneaker(
      "Nike Air Jordan 1 Low Elevate 'University Blue'",
      "Мужская обувь",
      "http://localhost/Lab4/images/sneaker4.png",
      12399
    )
  );
  db.Add(
    new Sneaker(
      "http://localhost/Lab4/images/sneaker4.png",
      "Мужская обувь",
      "http://localhost/Lab4/images/sneaker5.png",
      12399
    )
  );
  db.Add(
    new Sneaker(
      "Nike Cosmic Unity 2 'Coconut Milk'",
      "Мужская обувь",
      "http://localhost/Lab4/images/sneaker6.png",
      12399
    )
  );
  db.Add(
    new Sneaker(
      "Nike Air Max 97",
      "Мужская обувь",
      "http://localhost/Lab4/images/sneaker7.png",
      12399
    )
  );
  db.Add(
    new Sneaker(
      "Nike Challenger OG",
      "Мужская обувь",
      "http://localhost/Lab4/images/sneaker8.png",
      12399
    )
  );
  AddShopItemsList(GenerateShopItemsList(db), "shopItemsListContainer");
  // console.log(db);
  // console.log(JSON.stringify(db));
  // console.log();
}

function AddStringFormat() {
  //"{0} is dead, but {1} is alive! {0} {2}".format("ASP", "ASP.NET")
  // First, checks if it isn't implemented yet.
  if (!String.prototype.format) {
    String.prototype.format = function () {
      var args = arguments;
      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    };
  }
}

function GenerateInsertScript(db) {
  AddStringFormat();
  str = "";
  for (var i = 0; i < db.items.length; i++) {
    str +=
      "INSERT INTO `sneakers`.`sneakers`(`title`,`description`,`imageUrl``price`)VALUES";
    str += "('{0}','{1}','{2}',{3})".format(
      db.items[i].title,
      db.items[i].description,
      db.items[i].imageUrl,
      db.items[i].price
    );
  }
  console.log(str);
}

function GenerateShopItemTile(shotpItemObj) {
  if (shotpItemObj != undefined) {
    var itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "shopItem");
    var img = document.createElement("img");
    img.setAttribute("class", "shopItemImg");
    img.setAttribute("src", shotpItemObj.imageUrl);
    img.setAttribute("onerror", "this.src='Images/defaultSneaker.jpg';");
    var h2Title = document.createElement("h2");
    h2Title.setAttribute("class", "shopItemTitle");
    h2Title.innerHTML = shotpItemObj.title;
    var pDescription = document.createElement("p");
    pDescription.setAttribute("class", "shopItemDescription");
    pDescription.innerHTML = shotpItemObj.description;
    var pPrice = document.createElement("p");
    pPrice.setAttribute("class", "shopItemPrice");
    pPrice.innerHTML = shotpItemObj.price;
    var divButtons = document.createElement("div");
    //#region Форма для кнопок
    var btnFrom = document.createElement("form");
    btnFrom.setAttribute("method", "post");
    btnFrom.setAttribute("action", "Edit.php");
    //#endregion
    //#region Кнопки
    divButtons.setAttribute("class", "btn-group");
    //#region
    var hiddenInputId = document.createElement("INPUT");
    hiddenInputId.setAttribute("name", "ID");
    hiddenInputId.setAttribute("class", "d-none");
    hiddenInputId.setAttribute("type", "sumbit");
    hiddenInputId.setAttribute("value", shotpItemObj.id);
    //#endregion
    //#region Кнопка купить
    var btnBuy = document.createElement("button");
    btnBuy.setAttribute("class", "btn btn-outline-secondary");
    btnBuy.setAttribute("type", "button");
    btnBuy.innerHTML = "<a>Купить</a>";
    //#endregion
    //#region Кнопка редактирования
    var btnEdit = document.createElement("button");
    btnEdit.setAttribute("class", "btn btn-outline-primary");
    btnEdit.setAttribute("type", "submit");
    btnEdit.setAttribute("name", "edit");
    btnEdit.setAttribute("itemId", shotpItemObj.id);
    btnEdit.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path></svg>';
    //#endregion
    //#region Кнопка удаления
    var btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-outline-danger");
    btnDelete.setAttribute("type", "submit");
    btnDelete.setAttribute("name", "delete");
    btnDelete.setAttribute("itemId", shotpItemObj.id);
    btnDelete.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>';
    //#endregion
    //#endregion
    itemDiv.appendChild(img);
    itemDiv.appendChild(h2Title);
    itemDiv.appendChild(pDescription);
    itemDiv.appendChild(pPrice);
    divButtons.appendChild(btnBuy);
    divButtons.appendChild(btnEdit);
    divButtons.appendChild(btnDelete);
    btnFrom.appendChild(hiddenInputId);
    btnFrom.appendChild(divButtons);
    itemDiv.appendChild(btnFrom);
    return itemDiv;
  }
  return null;
}

function GenerateShopItemsList(db) {
  if (db != undefined && db.items != undefined) {
    var listDiv = document.createElement("div");
    listDiv.setAttribute("class", "shopItemsList");
    db.items.forEach((element) => {
      listDiv.appendChild(GenerateShopItemTile(element));
    });
    return listDiv;
  }
  return null;
}

function AddShopItemsList(divItemsList, idContainer) {
  var shopItemsContainer = document.getElementById(idContainer);
  if (shopItemsContainer != undefined) {
    shopItemsContainer.appendChild(divItemsList);
  } else {
    console.log("Не найден контейнер для списка тваров!");
  }
}

function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

function LoadDataFromFile(){
  fetch("./data.json")
    .then((response) => response.json())
    .then((json) => {
      var db = new DB();
      db.items = json.items;
      //GenerateInsertScript(db);
      AddShopItemsList(GenerateShopItemsList(db), "shopItemsListContainer");
    });
}

function HttpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function DeleteDataFromDB(id){
  var formdata = new FormData();
formdata.append("id", id);

var requestOptions = {
  method: 'DELETE',
  body: formdata,
  redirect: 'follow'
};

fetch("http://localhost/Lab5/API.php?id=50", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

function LoadDataFromDB(){
    var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
  fetch("http://localhost/Lab5/API.php?tableName=sneakers",requestOptions)
    .then((response) => response.json())
    .then((json) => {
      var db = new DB();
      db.items = json;
      AddShopItemsList(GenerateShopItemsList(db), "shopItemsListContainer");
    });
  }

window.onload = function () {

  //GenerateDB();
  //LoadDataFromFile();
  LoadDataFromDB();
};
