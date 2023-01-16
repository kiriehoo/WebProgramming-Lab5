function GetItemById(id) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost/Lab5/API.php?tableName=sneakers&id=" + id, requestOptions)
    .then(response => response.text())
    .then(
      result => {
        var items = JSON.parse(result);
        if (items && items.length > 0)
          FillForm(items[0]);
      }
    )
    .catch(error => console.log('error', error));
}

function FillForm(item) {
  if (item) {
    var txbTitle = document.getElementById("txbTitle");
    var txbDescription = document.getElementById("txbDescription");
    var txbUrl = document.getElementById("txbUrl");
    var txbPrice = document.getElementById("txbPrice");
    if (txbTitle) txbTitle.value = item.title;
    if (txbDescription) txbDescription.value = item.description;
    if (txbUrl) txbUrl.value = item.imageUrl;
    if (txbPrice) txbPrice.value = item.price;
  }
}

function GetDB() {
  var hfDB = document.getElementById("hfDB");
  if (hfDB) {
    var valueStr = hfDB.getAttribute("value");
    return JSON.parse(valueStr);
  }
  return undefined;
}

function SetDB(dbObj) {
  var hfDB = document.getElementById("hfDB");
  if (hfDB) hfDB.setAttribute("value", JSON.stringify(dbObj));
}

function SetId(valueStr) {
  var hfID = document.getElementById("hfID");
  if (hfID) hfID.setAttribute("value", valueStr);
}

function GetId() {
  var hfID = document.getElementById("hfID");
  if (hfID) {
    var valueStr = hfID.getAttribute("value");
    if (!isNaN(valueStr))
      return parseInt(valueStr);
  }
  return NaN;
}

function Create(title, description, imageUrl, price) {
  var formdata = new FormData();
  formdata.append("title", title);
  formdata.append("description", description);
  formdata.append("imageUrl", imageUrl);
  formdata.append("price", price);

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://localhost/Lab5/API.php", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function Update(id, title, description, imageUrl, price) {
  var myHeaders = new Headers();
  myHeaders.append("id", id);

  var formdata = new FormData();
  formdata.append("id", id);
  formdata.append("title", title);
  formdata.append("description", description);
  formdata.append("imageUrl", imageUrl);
  formdata.append("price", price);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  fetch("http://localhost/Lab5/API.php", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

function Save() {
  var txbTitle = document.getElementById("txbTitle");
  var txbDescription = document.getElementById("txbDescription");
  var txbUrl = document.getElementById("txbUrl");
  var txbPrice = document.getElementById("txbPrice");
  if (txbTitle && txbDescription && txbUrl && txbPrice) {
    if (!isNaN(this.GetId())) {
      Update(this.GetId(),
        txbTitle.value,
        txbDescription.value,
        txbUrl.value,
        txbPrice.value);
    }
    else {
      Create(
        txbTitle.value,
        txbDescription.value,
        txbUrl.value,
        txbPrice.value)
    }
  }
  document.getElementById("newItemForm").submit();
}

function Delete() {
  var id = this.GetId();
  var db = new DB();
  db.items = GetDB().items;
  db.Delete(id);
  SetDB(db);
}

window.onload = function () {
  // fetch("./data.json")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     var db = new DB();
  //     db.items = json.items;
  //     FillForm(db.Get(GetId()));
  //     SetDB(db);
  //   });
};
