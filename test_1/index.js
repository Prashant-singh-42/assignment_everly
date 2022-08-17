function setError(id, error, count, index) {
  //set error inside the tag of id
  var element = document.getElementById(id);
  console.log(element);
  var content = element.nextElementSibling;
  console.log(document.getElementsByClassName("errmsg1"));
  if (count === 1) {
    document.getElementsByClassName("errmsg1")[index].textContent = error;
  } else if (count === 2) {
    document.getElementsByClassName("errmsg2")[index].textContent = error;
  } else if (count === 3) {
    document.getElementsByClassName("errmsg3")[index].textContent = error;
  }
  console.log(document.getElementsByClassName("errmsg1"));
  element.setAttribute("class", "err");
  element.addEventListener("mouseover", function () {
    element.setAttribute("class", "");
    content.classList.add("visible");
  });
  element.addEventListener("mouseout", function () {
    content.classList.remove("visible");
  });
}

function snackBar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function validateForm() {
  var returnVal = true;
  var specials = [
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  var allData = document.forms["testForm"];
  var allInputs = allData.getElementsByTagName("input");
  var index = 0

  for (let i of allInputs) {
    var count = 0;
    var currentVal = i.value;
    console.log(currentVal);
    for (let j of currentVal) {
      for (let z of specials) {
        if (j === z) {
          console.log(currentVal);
          count += 1;
          setError(i.id, "[can't have special characters]", count, index);
          returnVal = false;
          break;
        }
      }
      if (returnVal === false) {
        break;
      }
    }

    if (currentVal.length < 5) {
      count += 1;
      setError(i.id, "[must be at least 5 characters]", count, index);
      returnVal = false;
    }

    if (
      currentVal[0] === "-" ||
      currentVal[0] === "_" ||
      currentVal[0] === "+"
    ) {
      count += 1;
      setError(i.id, "[can't start with '+ - _']", count, index);
      returnVal = false;
    }
    index += 1
  }
  if (returnVal) {
    // alert("form submitted succesfully")
    snackBar()
    allData.reset()
  }
  return returnVal;
}
