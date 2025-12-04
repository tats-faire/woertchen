# Woertchen

Eine Webapp zum Generieren, Speichern und Exportieren von zufallsgenerierten (deutschen) Phrasenketten.

## Tech Stack

Angular 

## Development server

Starte das Angular Projekt lokal:

```bash
cd frontend
ng serve
```

## Neue Komponente erstellen


```bash
ng generate component component-name
```

Um eine komplette Liste an verfügbaren schematics (z.B. components`, `directives`, oder `pipes`) anzuzeigen:

```bash
ng generate --help
```

## Building

Um den build Prozess auszuführen

```bash
ng build
```

Dadurch wird das Projekt kompiliert und die Build-Artefakte im Verzeichnis `dist/` gespeichert.

## Running unit tests

Um Unit-Tests mit dem Test-Runner [Karma](https://karma-runner.github.io) auszuführen, wird folgender Befehl verwendet:
```bash
ng test
```