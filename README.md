# schema-generator


## Generowanie pliku JSON schema

JSON schema to sposób definiowania formatów i walidowania przechodzących przez system eventów (obiektów JSON).

Program *schema-generator.js* służy do automatycznego wygenerowania odpowiedniego pliku z JSON schema na podstawie informacji znajdujących się w pliku konfiguracyjnym *config.json*.

Założenia, na których opiera się generator:
* wszystkie eventy zawierają pewną wspólną część pól (wspólna sekcja *security*)
* zawartość pola *eventType* definiuje typ przychodzącego eventu
* różne typy eventów zawierają różne dodatkowe pola (różne sekcje *business*)
* w każdym evencie muszą wystąpić wszystkie zdefiniowane dla niego pola oraz nie mogą pojawić się w nim żadne nadmiarowe pola

Plik *config.json* zawiera konfigurację do generatora zdefiniowaną w następujący sposób:
* "common" - wartość tego pola wskazuje na plik JSON z definicjami pól wspólnych (poza polem "eventType", które dodawane jest automatycznie) dla wszystkich typów eventów
```
"common" : "./common.json"
```
* "eventType" - to słownik wartości *eventType* i plik JSON z definicjami dodatkowych pól charakterystycznych dla danego typu eventu
```
"eventTypes": {
    "transfer": "./transfer.json", 
    "deposit": "./deposit.json" 
}
```

Ścieżki do plików z opisami pól odnoszą się względem pliku schema-generator.js (względność oznacza przedrostek "./" nazwy pliku).


Pliki z definicjami pól to obiekty JSON z wypisanymi właściwościami i ich ograniczeniami m.in. zbiorem dopuszcalnych wartości, formatem itp. Więcej informacji na temat dopuszczalnych typów i restrykcji znajduje się [tutaj](https://cswr.github.io/JsonSchema/spec/basic_types/).

Na przykład, fragment pliku "common.json"
```
{
  ...
  "sessionId": {
        "type": "string"
   },
  "channel": {
        "type": "string",
        "enum": ["INTERNET", "MOBILE"]
   },
   "startTime": {
        "type": "string",
        "format": "date-time"
    },
   ...
}
```

Aby wygenerować plik JSON schema na podstawie zdefiniowanej w pliku config.json konfiguracji oraz plików z opisami pól, należy:
* zainstalować Node JS
* pobrać pliki źrodłowe z tego repozytorium
* z konsoli przejść do katalogu z kodem źródłowym
* wykonać komendę ```node schema-generator.js```

Wygnerowana schema pojawi się w pliku *schema.json* i może być zastosowana przy uruchomieniu [serwisu SOC](https://github.com/olagontarz/soc-service).
