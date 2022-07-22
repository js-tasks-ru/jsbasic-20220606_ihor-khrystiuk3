/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.render(rows);
  }

  generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
    row.appendChild(document.createElement("th"));
  }

  generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
      let cell = row.insertCell();
      let btn = document.createElement("button");
      let text = document.createTextNode('X');
      btn.appendChild(text);
      cell.appendChild(btn);
    }
  }

  render(rows) {
    let table = document.createElement("table");
    let data = Object.keys(rows[0]);
    this.generateTable(table, rows);
    this.generateTableHead(table, data);
    table.addEventListener("click", event => event.target.closest('tr').remove());
    return table;
  }
}
