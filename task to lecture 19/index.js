function httpGet(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

httpGet("data.json")
  .then(response => {
    let user = JSON.parse(response);
    return user;
  })

  .then(response => {
    const template = document.getElementById("template");
    const fragment = document.createDocumentFragment();
    response.map(item => {
      createTemplate(item, fragment, template);
    });
    return fragment;
  })

  .then(fragment => {
    const conteiner = document.querySelector(".grid");
    conteiner.appendChild(fragment);
  });

function createTemplate(item, fragment, template) {
  let element = template.content.cloneNode(true);
  element.querySelector(".img").src = item.image;
  element.querySelector(".title").textContent = item.name;
  element.querySelector(".cost").textContent = "$  " + item.price;
  element.querySelector(".grid__item").dataset.cost = item.price;
  element.querySelector(".grid__item").dataset.name = item.name;
  fragment.appendChild(element);
}

window.onload = function() {
  const phoneCount = {};
  const blockRender = document.querySelector(".basket__cost");
  const basket = document.querySelector(".basket");
  const btnReset = basket.querySelector(".btn-reset");
  const btnBuy = basket.querySelector(".btn-buy");

  blockRender.textContent = "0";
  const btnAll = document.querySelectorAll(".add");
  Array.from(btnAll, item => {
    item.addEventListener("click", calculat);
  });

  function calculat(evt) {
    const targetItemCost = evt.target.closest(".grid__item").dataset.cost;
    const targetItemName = evt.target.closest(".grid__item").dataset.name;
    if (!phoneCount[targetItemName]) {
      phoneCount[targetItemName] = 0;
    }
    phoneCount[targetItemName] += 1;
    if (basket.classList.contains("isHiden")) {
      basket.classList.remove("isHiden");
    }
    const newSum = parseInt(blockRender.textContent) + parseInt(targetItemCost);
    blockRender.textContent = newSum;
    createString(targetItemName, phoneCount[targetItemName]);
  }
  
  btnReset.addEventListener("click", reset);

  function reset() {
    basket.classList.add("isHiden");
    for (key in phoneCount) {
      phoneCount[key] = 0;
    }
    blockRender.textContent = "0";
    document.querySelector(".mobile").textContent = "";
  }

  btnBuy.addEventListener('click', () => alert('Sorry there were technical problems'))
};

function createString(name, count) {
  const mountPoint = document.querySelector(".mobile");
  if (count > 1) {
    return reRender(mountPoint, name, count);
  }
  const tamplateString = document.querySelector("#template_string");
  const elementString = tamplateString.content.cloneNode(true);
  elementString.querySelector(".row").dataset.name = name;
  elementString.querySelector(".mobile__name").textContent = name;
  elementString.querySelector(".mobile__count").textContent = count;
  mountPoint.appendChild(elementString);
}

function reRender(mountPoint, name, count) {
  const allString = mountPoint.querySelectorAll(".row");
  allString.forEach(element => {
    if (element.dataset.name == name) {
      element.querySelector(".mobile__count").textContent = count;
    }
  });
}
