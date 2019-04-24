<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# JavaScript - zadania domowe
> Kod wpisz w odpowiednim pliku, zgodnie z poleceniem zadania.
Uważnie czytaj treść zadania – utworzone przez Ciebie strony MUSZĄ wyświetlać te same komunikaty co w treści zadania, a funkcje i metody MUSZĄ posiadać nazwy dokładnie takie same jak podane
w zadaniu.

## Dzień 4 - JQuery

### Zadanie 1

> Plik HTML do tego zadania to plik **zadanie1.html**, plik JavaScript to **zadanie1.js** a plik css to **zadanie1.css**

Celem zadania jest stworzenie spinnera oraz paska postępu, który będzie zmieniał swą szerokość w zależności od wartości inputa.

1. Input o id `spinnerValue` będzie działał jako spinner, oznacza to, że wciskając odpowiedni przycisk, będziemy zwiększać lub zmniejszać jego wartość.  
   Element ma dodany atrybut `readonly` aby nie można było wpisać w niego bezpośrednio wartości.    
2. Dodaj funkcjonalność, która spowoduje zmianę wartości po wciśnięciu jednego z przycisków.  
3. Następnie dodaj funkcjonalność możliwości ustawienia:  
   * wartości minimalnej w inpucie
   * wartości maksymalnej w inpucie
   * skok wartości po jednorazowym kliknięciu przycisku (np. `4` lub `0.05`)
   Powyższe ustawienia po zapisaniu powinny od razu działać dla inputa.
4. Kolejnym krokiem jest połączenie `inputa` z paskiem postępu, pasek powinien zmieniać swą szerokość w zależności od wartości inputa i jego możliwej maksymalne wartości (domyślnie `100`).  
   Jeśli maksymalna ustawiona wartość inputa to `200` a aktualna liczba to `40`, pasek powinien być widoczny w `20%`.  
   Przeanalizuj kod html i css i zastanów się, którego elementu szerokość musisz zmieniać.  
5. Dodatkowo - jeśli przycisk spinnera zostanie wciśnięty i przytrzymany, wartość powinna cały czas rosnąć.   

### Zadanie 2 - dodatkowe

>Plik HTML do tego zadania to plik **zadanie2.html**, a plik JavaScript to **zadanie2.js**.

W pliku `zadanie2.html` napisz wersję zadania 1 taką aby korzystała z biblioteki jQuery UI i jej dwóch funkcjonalności.  
Możesz dowolnie modyfikować kod html, css jak i JavaScript.  

* [Spinner](https://jqueryui.com/spinner/)
* [ProgressBar](https://jqueryui.com/progressbar/)