import { Routes } from "@angular/router"
import {LandingPage} from './landing-page/landing-page';
import {GenerationPage} from './generation-page/generation-page';
import {SavedPhrasesPage} from './saved-phrases-page/saved-phrases-page';


const landingPage = {
  path: '',
  component: LandingPage
}

const generationPage = {
  path: 'generate',
  component: GenerationPage
}

const savedPhrasesPage = {
  path: 'saved',
  component: SavedPhrasesPage
}

export const routes : Routes = [
  landingPage,
  generationPage,
  savedPhrasesPage
]
