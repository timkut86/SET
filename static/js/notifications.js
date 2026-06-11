fetch("../static/notifications/notifications.json")
  .then(response => response.json())
  .then(_data => {
    function _add(n){
        document.querySelector(`.not_container`).innerHTML += `
        <div class="notification">
            <div>
                <p id="Limelight">
                    ${_data[n].title}
                </p>
                <p id="regular">
                    ${_data[n].text}
                </p>
            </div>
            <p id="light">
                ${_data[n].ago}
            </p>
        </div>
        `;
    }
    _add(1);
    _add(2);
    _add(3);
    _add(4);
    _add(5);
    _add(6);
    _add(7);
    _add(8);
    _add(9);
    _add(10);
    _add(11);
    _add(12);
    _add(13);
    _add(14);
    _add(15);
    _add(16);
    _add(17);
    _add(18);
    _add(19);
    _add(20);
  });