const form = document.querySelector("form");

const generateString = (length) => {
  let result = "";
  const characters =
    "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const quantity = (length, quantity) => {
  let data = [];
  let i = quantity;
  
  while (true) {
    i--;
    const newData = generateString(length);
    const searchRep = data.filter((i) => i === newData);
    if (searchRep.length == 0) {
      data.push(newData);
    } else {
      i++;
    }
    if (i == 0) {
      break;
    }
  }

  return data;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const viewResult = document.querySelector(".result");
  viewResult.innerHTML = "";
  const data = quantity(e.target.leng.value, e.target.quantity.value);
  data.map((item, key) => {
    viewResult.innerHTML += `<li class="collection-item">${
      key + 1
    }.-${item}</li>`;
  });
});
