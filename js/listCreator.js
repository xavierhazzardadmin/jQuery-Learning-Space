const createList = () => {
  let carsList = document.querySelector("#carsList");

  for (let i = 0; i < 6; i++) {
    let carArray = [
      "Mercedes",
      "Audi",
      "Porsche",
      "Bentley",
      "Cadilac",
      "Range Rover"
    ];

    let addMoreText = () => {
      let node = document.createElement("li");

      let textNode = document.createTextNode(carArray[i]);

      node.appendChild(textNode);

      carsList.appendChild(node);
    };
    addMoreText();
  }
};
