const passwordForm = document.getElementById("logon-form");

document.forms.publish.onsubmit = function() {
    let message = this.message.value;
    if (message == '1002') {
        let mainText = document.getElementsByClassName("container");
        mainText[0].style.display = 'block';
    }
  };
