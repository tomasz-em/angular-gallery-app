# Angular (wersja 9+)
### _Wstęp do frameworka Angular. Słowo o TypeScript_ - **zjazd 8** - `2020 V 09`

### Używanie Angulara poprzez środowisko **node** celem łatwiejszych działań.
Witryna: [https://angular.io/](https://angular.io/)  
Dokumentacja: [https://angular.io/docs/](https://angular.io/docs/)  
Repozytorium github: [https://github.com/angular/angular/](https://github.com/angular/angular/)  

### Podstawowe koncepcje, architektura, komponenty, terminologia

* szybki start _tego_ projektu jako wynikowego z użycia pakietu `angular-cli` dla gotowej konfiguracji frameworka i środowiska
  - parametryzowane polecenia sterujące frameworkiem, głównie tworzenie nowych elementów różnego rodzaju, w tym poszczególnych projektów 
* **komponent elementu** jak najczęściej używana kategoria elementów frameworka i jego trójdzielna struktura 
  - **logika** w oparciu o klasy oraz importy z zewnątrz, **tag wyróżniający**, definicje przyjmowanych i zwracanych danych, **dekoratory**, **dyrektywy**, **metody komponentu**, **obsługa zdarzeń**, ... 
  - **szablon HTML**, definiujący zawartość w przeglądarce
  - **wewnętrzny arkusz styli**, nazwy selektorów w komponencie rodzica są generowane losowo, dzięki czemu zapewniona jest separacja klas komponentu ponad stylami projektu
  - (automatycznie tworzony plik testów jednostkowych danego komponentu)
* **dyrektywy**  
* główne różnice w stosunku do biblioteki **React**
* definiowanie **komponentów bezstanowych** oraz **komponentów stanowych**
  - ogólne zasady podobne jak w _Reactcie_
* nacisk na użycie **TypeScriptu** na każdym poziomie logiki
  - im bardziej szczegółowo tym mniej tworzonych błędów
  - do tego w IDE wsparcie struktury danych i dynamiczne podpowiedzi
* definiowanie parametrów wejściowych, ich typów oraz domyślnych wartości
* wyświetlanie wyrażeń lub/i wewnętrznej zawartości w szablonie za pomocą podwójnych **{{}}**, np.  _{{ wyrażenie }}_  
* przekazywanie parametrów pomiędzy komponentami
* automatyzacja linkowania dla plików projektu przy tworzeniu (generowaniu) nowego komponentu (obiektu) 
  - realizowane z poziomu linii poleceń
* utworzenie pierwszego komponentu
* konstrukcje warunkowe i pętle w komponentach _angulara_ - dyrektywy obsługują warunki logiczne w szablonie

### **Angular CLI** jako ułatwiony start w użytkowaniu frameworka Angular - pakiet **angular-cli**

Dokumentacja: [https://github.com/angular/angular-cli/](https://github.com/angular/angular-cli/)  
Repozytorium github: [https://github.com/angular/angular-cli](https://github.com/angular/angular-cli)  

#### Najlepiej używać poprzez `npx`, gdy _Angular CLI_ jest  **zainstalowany lokalnie**, by w danym obszarze roboczym definiować foldery projektu/projektów

* Instalacja _Angulara_ **lokalnie**:

```bash
npm install @angular/cli
```

* Szybkie tworzenie (generowanie) przykładowego komponentu _menu-boczne_ (wewnątrz aktualnego folderu):
  - od razu podłącza pliki komponentu do plików bieżącego projektu 

```bash
npx ng generate component menu-boczne
```

#### Drugie podejście jako **globalną instalację** tego pakietu (generalnie niezalecane przez _społeczność node_).

* Instalacja frameworka _Angular_ **globalnie**:

```bash
npm install -g @angular/cli
```

* Szybkie tworzenie (generowanie) przykładowego komponentu _belka-dolna_ (wewnątrz aktualnego folderu)
  - nie potrzeba poprzedzać polecenia _npm_/_npx_ 

```bash
ng generate component belka-dolna
```

_____

# Utworzenie pierwszego komponentu - _Galeria - przegląd slajdów_

* tworzenie prostej aplikacji, mini-komponentu
* zawiera grupę co najmniej trzech zdjęć, umieszczona poziomo lub pionowo jako miniatury (zmniejszony rozmiar)
* jedno ze zdjęć z zestawu do wyświetlenia obok tej listy w formie powiększonej
* automatyczna zmiana aktualnie wyświetlanego obrazka, po zadanym czasie następuje zmiana na kolejny z listy 
* przyciski nawigacyjne do zamiany aktywnego zdjęcia
* do rozszerzenia:
  - animacje
  - więcej obsługiwanych zdarzeń i interaktywności

## **Działający przykład _AngularWeatherApp (AngularGalleryApp)_  - [https://angular-gallery-app.now.sh/](https://angular-gallery-app.now.sh/)**

### Uwaga w powyższym linku są wyświetlane oba projekty. Na starcie należy wybrać jeden z nich do wyświetlenia. Wybór realizowany przez osobny komponent _angularowy_.

# Drugi przykład - _Pogoda - bieżące atrybuty oraz pięciodniowa prognoza_ 

* wykorzytanie API z [https://openweathermap.org/forecast5/](https://openweathermap.org/forecast5/)
  - wymaga rejestracji, ale oferuje darmowy pakiet API
  - klucz API wymagany w każdym zapytaniu
* odczytywanie stanu bieżącej pogody na podstawie lokalizacji (nazwy meijscowości), wpisywanej w pole wyszukiwania
* pierwsze zapytanie (_weather_) po dopasowaniu lokalizacji zwraca dane z API, które należy wyświetlić jako aktualne parametry pogody
* drugie zapytanie (_forecast_) zwraca dla danej lokalizacji dane pogodowe na pięć kolejnych dni
  - osiem prognoz w odstępstwie trzygodzinnym dla każdego dnia 
* zapewnić stylowanie dla wyświetlanych prognoz oraz atrybutów pogody 
* możliwe ulepszenia projektu
  - użyteczne i skuteczne UX/UI z uzględnieniem responsywności wyświetlanych wyników
  - można się zasugerować wyglądem lub zachowaniem pogodowym na popularnych portalach
  - uwzględnienie czasu lokalizacji docelowej (lokalnego czasu w danej strefie czasowej) przy wyświetlanych wyników; wyniki z API odnoszą się do godziny użytkownika w konkretnej strefie czasowej; ma to znaczenie, gdy odpytujemy o warunki pogodowa w _Jakimś Odległym Miejscu_ 
  - rozwinąć mechanizm geolokalizacji 
  - ...
---

## **Działający przykład _AngularGalleryApp_ - [https://angular-gallery-app.now.sh/](https://angular-gallery-app.now.sh/)**

### Uwaga: to jest ten sam odnośnik co powyżej, prowadzi do tego samego wspólnego projektu. Na starcie należy wybrać jeden z nich do wyświetlenia. Wybór realizowany przez osobny komponent _angularowy_.

---

## Uruchomienie (skrypty uruchamiające z domyślnego pakietu *Angular CLI*)
**Oczywiście wymaga środowiska uruchomieniowego node!**

* Użycie środowiska _Angular CLI_ w wersji 9.1.X
* Wykonaj **instalację lokalną** dla podległych podległości, z których korzysta ten projekt: `npm install`.

* **Startuj poprzez** `ng serve` lub `npm run start` - uruchomi się w trybie deweloperskim, co pozwala na łatwe testowanie i ewentualną edycję projektu.
Po uruchomieniu projekt wyświetli się w oknie domyślnej przeglądarki pod adresem [http://localhost:4200/](http://localhost:4200/) - domyślny adres lokalny dla projektu angularowego.

UWAGA: witryna przeładowuje się na bieżąco podczas edycji plików źródłowych. Wszelkie błędy będą widoczne w konsoli oraz w aktywnym oknie przeglądarki www. Wtedy aplikacja albo nie nie skompiluje się w całości, albo po prostu przerwie swoje uruchomienie się!

* `ng test` lub `npm run test` staruje tryb z użyciem frameworka _Karma_ - [https://karma-runner.github.io](https://karma-runner.github.io). 

* `ng build` lub `npm run build` powoduje **zbudowanie aplikacji** dla _celów produkcyjnych_, wynik działania w folderze `build`. Użycie z parametrem `--prod` utworzy wynik pod _środowisko produkcyjne_.

* Projekt zawiera także inne przygotowane skrypty, szczegółowy opis we wspomnianej dokumentacji [https://github.com/angular/angular-cli/](https://github.com/angular/angular-cli/)