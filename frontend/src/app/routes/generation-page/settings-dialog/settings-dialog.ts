import {Component, model, ModelSignal, OnInit, output, signal, WritableSignal} from '@angular/core';
import {phraseNumsModel} from '../generation-page';
import {form, FormField, max, min, required} from '@angular/forms/signals';

@Component({
  selector: 'app-settings-dialog',
  imports: [
    FormField
  ],
  templateUrl: './settings-dialog.html',
  styleUrl: './settings-dialog.sass',
})
export class SettingsDialog implements OnInit {
  phraseNumsInput: ModelSignal<phraseNumsModel> = model.required<phraseNumsModel>();
  phraseNumsForm: WritableSignal<phraseNumsModel> = signal<phraseNumsModel>({
    numberOfChains: 0,
    numberOfPhrasesPerChain: 0
  })
  onClose = output<void>();
  success = false;

  ngOnInit() {
    this.phraseNumsForm.set({
      numberOfChains: this.phraseNumsInput().numberOfChains.valueOf(),
      numberOfPhrasesPerChain: this.phraseNumsInput().numberOfPhrasesPerChain.valueOf(),
    })
  }

  phraseSettingsForm = form(this.phraseNumsForm, (fieldPath) => {
    required(fieldPath.numberOfChains, {message: 'Anzahl der generierten Phrasenketten muss angegeben werden'});
    min(fieldPath.numberOfChains, 1, {message: 'Es muss eine Zahl zwischen 1 und 10 angegeben werden'});
    max(fieldPath.numberOfChains, 10, {message: 'Es muss eine Zahl zwischen 1 und 10 angegeben werden'});
    required(fieldPath.numberOfPhrasesPerChain, {message: 'Anzahl der Phrasen pro Phrasenkette muss angegeben werden'});
    min(fieldPath.numberOfPhrasesPerChain, 1, {message: 'Es muss eine Zahl zwischen 1 und 10 angegeben werden'});
    max(fieldPath.numberOfPhrasesPerChain, 10, {message: 'Es muss eine Zahl zwischen 1 und 10 angegeben werden'});
  });

  onSubmitForm(event: Event) {
    event.preventDefault();
    this.phraseNumsInput.set({
      numberOfChains: this.phraseNumsForm().numberOfChains,
      numberOfPhrasesPerChain: this.phraseNumsForm().numberOfPhrasesPerChain
    });

    this.success = true;
    setTimeout(() => {
      this.onClose.emit()
    }, 2000);
  }
}
