import {Component, input, model, output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-settings-dialog',
  imports: [
    FormsModule
  ],
  templateUrl: './settings-dialog.html',
  styleUrl: './settings-dialog.sass',
})
export class SettingsDialog {
  // numberOfChains = input.required<number>();
  // numberOfPhrasesPerChain = input.required<number>();
  //
  // numberOfChainsUpdated = output<number>();
  // numberOfPhrasesPerChainUpdated = output<number>();
  numberOfChains = model.required<number>();
  numberOfPhrasesPerChain = model.required<number>();

  onSubmit() {
    // numberOfChainsUpdated.emit(numberOfChains())
  }
}
