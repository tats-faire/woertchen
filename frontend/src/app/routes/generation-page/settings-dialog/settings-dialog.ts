import {Component, input, model, ModelSignal, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {phraseNumsModel} from '../generation-page';

@Component({
  selector: 'app-settings-dialog',
  imports: [
    FormsModule
  ],
  templateUrl: './settings-dialog.html',
  styleUrl: './settings-dialog.sass',
})
export class SettingsDialog {
  phraseNums: ModelSignal<phraseNumsModel> = model.required<phraseNumsModel>();

  newNumberOfChains: number = 6;
  newNumberOfPhrasesPerChain = 5;
  onClose = output<void>();
  success = false;

  onSubmitForm() {
    this.phraseNums.set({
      numberOfChains: this.newNumberOfChains,
      numberOfPhrasesPerChain: this.newNumberOfPhrasesPerChain
    });
    this.success = true;
    setTimeout(()=> { this.onClose.emit()}, 3000);
  }
}
