import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
       <input type="text" class="excel__header-input" value="New table">
        <div class="excel__header-buttons">
          <div class="button">
              <span class="material-icons">delete_forever</span>
          </div>
          <div class="button">
              <span class="material-icons">exit_to_app</span>
          </div>
        </div>
    `
  }
}
