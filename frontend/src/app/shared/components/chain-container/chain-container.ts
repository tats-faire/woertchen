import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-chain-container',
  imports: [],
  templateUrl: './chain-container.html',
  styleUrl: './chain-container.sass',
})
export class ChainContainer {
  chain: InputSignal<string> = input("")
  protected readonly input = input;
}
