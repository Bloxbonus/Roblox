function validateForm() {
  let fn = document.forms["fn"].value;
  if (fn == "") {
    alert("Name must be filled out");
    return false;
  }
}