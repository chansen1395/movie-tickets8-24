// Business Logic for AddressBook ---------
function Ticket() {
  this.selections = {};
  // this.currentId = 0;
}

function Selection(movie, age, time) {
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Selection.prototype.getPrice = function () {
  let newReleases = ["Inception", "Spiderman"];
  var price = 8;
  if (newReleases.includes(this.movie)) {
    price = price + 2;
    return price;
  } else {
    return price;
  }
}

Selection.prototype.getAge = function () {
  var price = 0;
  if (this.age > 0 && this.age < 16) {
    price = price + 2;
    return price;
  }
  if (this.age >= 16 && this.age < 65) {
    price = price + 5;
    return price;
  }
  if (this.age >= 65) {
    return price;
  }
}

Selection.prototype.getTime = function () {
  var price = 0;
  if (this.time >= "18:00" && this.time <= "23:59") {
    price = price - 3;
    return price;
  } else
    return price;
}


let ticket = new Ticket();
function displayPrice(newSelection) {
  $(".movie").html(newSelection.getPrice());
  $(".age").html(newSelection.getAge());
  $(".time").html(newSelection.getTime());
  $(".total").html(newSelection.getPrice() + newSelection.getAge() + newSelection.getTime());
}


$(document).ready(function () {
  $("form#new-ticket").submit(function (event) {
    event.preventDefault();
    var inputtedMovie = $("select#new-movie").val();
    var inputtedAge = $("input#new-age").val();
    var inputtedTime = $("input#new-time").val();
    $("input#new-movie").val("");
    $("input#new-age").val("");
    $("input#new-time").val("");
    var newSelection = new Selection(inputtedMovie, inputtedAge, inputtedTime);
    displayPrice(newSelection);
  });
});


// var newSelection = new Selection("Star Wars", 12, "10:00");


// const something = {1:"a",2:"b"};

// function displayContactDetails(addressBookToDisplay) {
  //   let contactsList = $("ul#contacts");
  //   let htmlForContactInfo = "";
  //   Object.keys(addressBookToDisplay.contacts).forEach(function (key) {
//     const contact = addressBookToDisplay.findContact(key);
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// }