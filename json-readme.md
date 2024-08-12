# BASIC INFOS ZU JSON

JSON steht für `Javascript Object Notation`
Das bedeutet, dass ein JSON Object sehr ähnlich zu dem klassischen
Javascript Object ist. Dabei gibt es in JSON einige kleinigkeiten zu beachten.

1. Keys müssen in JSON immer ein String sein "firstname": "Lucky"
2. JSON ist ein Format das Daten als String speichert.
3. JSON ist mittlerweile eine der gängigsten Formen um Daten zu übermitteln. Daher eignet sich JSON hervorragend zur Kommuniktion zwischen einen Front-(Webseite/Client) und einem Backend (Server).
4. Während es in JS egal ist ob das letzte Item am Ende ein `,` hat, darf dies in JSON kein `,` haben.

```js
const jsObject = { firstname: "Lucky", lastname: "Luke" };
const jsonArray = [{}, {}, {}];
```

```json
    {"firstname": "Lucky", "lastname": "Luke"}
    [{},{},{}]
```

5. In JSON lässt sich kein JS schreiben, daher können wir den Daten weder einen Namen noch eine Art des Exports geben. Daher können wir ohne `{}` einen Default Namen frei wählen

```js
import userData from "./data/userData.js";
```

6. Das Importieren von JSON ist eine neue und experimentelle Möglichkeit JSON-Dateien zu verwenden. Vor Node Version 20 musste zur Verwendung von JSON Daten das Node eigene [FileSystem](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) verwenden.

7. Wir kennen das JSON Format bereits aus der `package.json`, diese erzeugen wir mit dem Befehl `npm init`

## Package Json

Innhalb der Package.json gibt es verschiedene für uns wichtige Abschnitte wie beispielsweise `dependencies`,`devDependencies` oder `scripts`.

### dependencies

Unter dem Begriff dependencise versteht man Abhägigkeiten. Das bedeutet, von welchen Packages ist es Abhängig, dass dein Programm läuft? Zum Beispiel: Es ist wichtig, dass readline-sync installiert ist, damit Usereingaben erfolgen können

Command: `npm i packageName` (i shortcut for install)

### devDependencies

Die devDependencies hingegen sind die packages, die nur für die Entwicklung, aber nicht für die Funktionen wichtig sind. Zum Beispiel: nodemon, testing packages und vieles mehr.

Command: `npm i -D packageName` (-D shortcut für devDependencies)

### scripts

Unter einem Script versteht man einen ausführbaren Code. In den sogenannten Script können beispielsweise Commands stehen, die euch das Leben etwas erleichtern.

Beispiel: `npm run dev`, `npm start`,

```json
"scripts": {
    "start": "node main.js",
    "dev": "nodemon main.js"
  },
```

Es geht aber auch komplexer 😉

```json
"scripts": {
    "lint-jshint": "jshint --verbose --show-non-errors ./src/main/js",
    "lint-eslint": "eslint ./src/main/js ./src/test/js",
    "lint-csslint": "csslint ./src/main/js",

    "lint": "npm run -s lint-jshint & npm run -s lint-eslint & npm run -s lint-csslint",

    "pretest": "rimraf ./build/reports/tests && mkdirp ./build/reports/tests && npm run -s lint",
    "test": "karma start ./src/test/resources/conf/karma.conf.js",
}
```
