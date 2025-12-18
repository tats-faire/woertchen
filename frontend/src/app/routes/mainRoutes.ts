import { Routes } from "@angular/router"
import {LandingPage} from './landing-page/landing-page';
import {GenerationPage} from './generation-page/generation-page';
import {SavedPhrasesPage} from './saved-phrases-page/saved-phrases-page';


const landingPage = {
  path: '',
  component: LandingPage,
  title: 'start'
}

const generationPage = {
  path: 'generate',
  component: GenerationPage,
  title: 'Generieren'
}

const savedPhrasesPage = {
  path: 'saved',
  component: SavedPhrasesPage,
  title: 'Meine Phrasen'
}

export const routes : Routes = [
  landingPage,
  generationPage,
  savedPhrasesPage
]
