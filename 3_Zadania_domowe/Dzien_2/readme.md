<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
Uważnie czytaj treść zadania – utworzone przez Ciebie strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcje i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane
w zadaniu.

### Dzień 2 - DOM
> Zadanie 1 wykonaj w pliku searchDom.js

### Zadanie 1

Plik HTML do tego zadania to plik **searchDom.html**, a plik js to **searchDom.js**.

> Nie używaj eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.

> Do każdego podpunktu stwórz odpowiednią funkcję o nazwie podanej w treści zadania.

**1. Pobranie informacji z atrybutu data:**
- Znajdź element o **id** ```#menu```,
- Stwórz funkcję ```getDataInfo(element)``` do której przekaż, jako argument, znaleziony element,
- Stwórz w funkcji nową tablicę i wypełnij ją wartościami pobranymi z atrybutu data każdego elementu **li**. Zauważ, że
elementy **li** to dzieci elementu o id ```#menu```.
- Zwróć tą tablicę.

**2. Szukanie elementu po id:**
- Znajdź element o **id** ```#main-contener```.
- Stwórz funkcję ```getElementClass(element)``` do której przekaż, jako argument, znaleziony element.
- Zwróć tablicę złożoną z nazw klas tego elementu.

**3. Szukanie elementu po klasie:**
- Znajdź element o **klasie** ```.pink-color```.
- Stwórz funkcję ```getElementText(element)``` do której przekaż, jako argument, znaleziony element.
- Zwróć z funkcji tekst, znajdujący się w tym elemencie

**4. Szukanie elementu po klasie:**
- Znajdź elementy o **klasie** ```.images```.
- Stwórz funkcję ```getElementAlt(element)``` do której przekaż, jako argument, znalezione elementy.
- Stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu alt obrazków. Pobierz te atrybuty z przekazanych jako argument elementów.

**5. Szukanie elementu po klasie:**
- Znajdź elementy o **klasie** ```.my-link```.
- Stwórz funkcję ```getElementHref(element)``` do której przekaż, jako argument, znalezione elementy.
- Stwórz w funkcji tablicę i wypełnij ją wartościami pobranymi z atrybutu href linków. Pobierz te atrybuty z przekazanych jako argument elementów.
