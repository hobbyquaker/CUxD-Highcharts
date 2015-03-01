# CUxD-Highcharts 1.4

Zusatzsoftware für die HomeMatic CCU um CUxD Geräte-Logs via Highcharts/Highstock zu visualisieren

## Installation

### Als Zusatzsoftware

Im HomeMatic WebUI cuxchart_x.x.x.tar.gz als Zusatzsoftware installieren. [Download über homematic-inside.de](http://homematic-inside.de/software/download/item/cuxd-highcharts)

### Per FTP/SCP
(Vorteil: kein Zwangsreboot der CCU)

Die cuxchart_x.x.x.tar.gz Datei per (s)ftp auf die CCU ins Verzeichnis /tmp/ kopieren. Auspacken mittels "tar xvzf cuxchart_x.x.x.tar.gz". Zum Installieren ./update_script aufrufen.

## Dokumentation

* Wie das Geräte-Logging des CUxD eingerichtet wird ist im CUxD-Handbuch Kapitel 8 beschrieben. Der Parameter DEVTIMEFORMAT muss auf seinem Default-Wert %Y-%m-%dT%X bleiben.
* CUxD-Highcharts liest das Config-File des CUxD aus und findet so das Logfile. Es ist daher keine weitere Konfiguration notwendig.
* Einfach installieren und http://ccu/addons/cuxchart/menu.html aufrufen

### URL-Parameter

Über Parameter in der URL können verschiedene Optionen von CUxD-Highcharts gesteuert werden.

Beispiel:    

    http://homematic/addons/cuxchart/?navigator=false&scrollbar=false&legend=inline&zoom=false&range=24&period=24&dp=CUX0600101:1.MEAN5MINUTES,CUX0600101:1.METER

#### theme

* THEME - Darstellung nach Geschmack aufhübschen ;) Bisher stehen zur Verfügung: grid, skies, dark-green, dark-blue und gray

#### dp

* DATAPOINTS - Eine Komma-getrennte Liste von Datenpunkten die geladen und angezeigt werden sollen

#### navserie

* DATAPOINT - Datenpunkt für die Anzeige im "Navigator"

#### grouping

* false - deaktiviert das Aggregieren von Daten grundsätzlich

#### range

* HOURS - Setzt Zoomstufe auf HOURS Stunden

#### period

* HOURS - Lädt nur Logeinträge aus den letzten HOURS Stunden

#### loader

* false - blendet die Infos beim Laden aus

#### navigator

* false - Navigations-Bereich unten wird ausgeblendet

#### scrollbar

* false - Scrollbar wird ausgeblendet

#### legend

* false - Legende, Überschrift und Credits werden ausgeblendet
* inline - Legende wird horiziontal oben im Graph angezeigt, Überschrift und Credits werden ausgeblendet

#### zoom

* false - Kein Zoomen möglich

#### percentaxis

* true - zusätzliche Achse Rechts für Prozent-Werte

#### area

* true - Chart-Typen arealine statt line und areaspline statt spline

## ToDo / Roadmap

* Tooltip erweitern, Tooltip in Legende hinzufügen: Anzahl Werte, Zeitpunkt erster und letzter Wert, Anzahl Log-Einträge, Mittel, Median, Min, Max, ...?
* Unter Titel Log-Einträge pro Minute, Zeitpunkt ältester Eintrag und Zeitpunkt letzter Eintrag anzeigen
* menu.html Erweitern: Möglichkeit config.js hier komfortabel mit der Maus zu bearbeiten
* Marker setzen und speichern

## Changelog

### 1.4.5
* Problem bei Abfrage einer großen Anzahl von Datenpunkten behoben
* entfernen ungültiger Datensätze durch CUxD bevor die Daten an Highcharts übergeben werden (CUxD Version > 0.9 erforderlich)
* Start/Stop Script optimiert und Fehler behoben
* Update-Script vereinfacht

### 1.4.3
* Fehler behoben bei Auswahl des Navigator-Datenpunkts
* Fehler behoben bei Darstellung %-Ordinate
* Fehler behoben auf Menüseite

### 1.4.2
* exporting Modul hinzugefügt - Charts können nun als .jpg, .png, .svg oder .pdf exportiert werden
* neuer Parameter "percentaxis" blendet zusätzliche Y-Achse rechts für Prozent-Werte ein
* neuer Parameter "navserie" - hiermit kann ein Datenpunkt für den "Navigator" ausgewählt werden
* reset.html hinzugefügt - Aufruf löscht den Cache für die Menü-Seite

### 1.4.1
* Fehler behoben der die Menüseite "kaputt" gemacht hat bei Installation als Zusatzsoftware

### 1.4.0
* neue Menüseite zur komfortablen Auswahl von Datenpunkten und weiteren Optionen: /addons/cuxchart/menu.html
* Config-Datei: js/config.js - hier können Highcharts-Optionen nach Datenpunkt-Typ oder explizit für bestimmte Datenpunkte konfiguriert werden.
* Fehler behoben: die Parameter range, period und navigator verhalten sich nun wie beabsichtigt
* Fehler angefangen: fehlerhafte Angaben beim Parameter dp
* diverse kleine Verbesserungen, diverse Fehler behoben

### 1.3.9
* an CCU2 angepasstes Update-Script (Danke Uwe!)

### 1.3.8
* diverse Fehler behoben
* Verbesserungen beim Aggregieren

### 1.3.5
* Fehler beim verarbeiten der Zeitzone behoben
* Tooltips neu formatiert
* Notwendige CUxD Settings (DEVLOGFILE, DEVTIMEFORMAT, min. 1 LOGIT Eintrag) werden geprüft
* diverse Fehler behoben und kleine Änderungen vorgenommen
* Code aufgeräumt, .tar.gz wird nun mit minifizierter cuxchart.js ausgeliefert 

### 1.3
* Steuerung verschiedener Optionen über URL-Parameter
* Themes
* Datenpunkte in Legende alphabetisch sortiert
* Fehler beim Speichern der ausgewählten Datenreihen behoben
* Caching der alten Logs
* diverse Bugfixes und kleine Verbesserungen

### 1.2
* Verwendung von Highstock
* Unterstützung von DEVLOGMOVE
* Ausgewählte Graphen werden im LocalStorage des Browsers gespeichert und beim nächsten Seitenaufruf autom. wieder ausgewählt
* Statt Datenpunkt-Bezeichnern werden in der Legende nun Kanalnamen gefolgt vom HssType und der Einheit angezeigt
* Lade-Seite mit Möglichkeit das Laden der Logfiles abzubrechen
* Für unterschiedliche Datenpunkttypen werden nun passende Graphen-Typen ausgewählt

### 1.1
* diverse Fehler behoben

### 1.0
* Erstes öffentliches Release



## Verwendete Software

* [jQuery](http://www.jquery.com)
* [loStorage](https://github.com/js-coder/loStorage.js)
* [Highcharts / Highstock - Non-Commercial License - keine kommerzielle Verwendung!](http://www.highcharts.com)

## Copyright, Lizenz, Bedingungen

Copyright (c) 2013 [hobbyquaker](https://github.com/hobbyquaker)   
Lizenz: [CC BY-NC 3.0](http://creativecommons.org/licenses/by-nc/3.0/de/)

Sie dürfen:    
 * das Werk bzw. den Inhalt vervielfältigen, verbreiten und öffentlich zugänglich machen
 * Abwandlungen und Bearbeitungen des Werkes bzw. Inhaltes anfertigen  

Zu den folgenden Bedingungen:   
 * Namensnennung - Sie müssen den Namen des Autors/Rechteinhabers in der von ihm festgelegten Weise nennen.
 * Keine kommerzielle Nutzung — Dieses Werk bzw. dieser Inhalt darf nicht für kommerzielle Zwecke verwendet werden.  

Wobei gilt:    
 * Verzichtserklärung - Jede der vorgenannten Bedingungen kann aufgehoben werden, sofern Sie die ausdrückliche Einwilligung des Rechteinhabers dazu erhalten.


Die Veröffentlichung dieser Software erfolgt in der Hoffnung, daß sie Ihnen von Nutzen sein wird, aber
OHNE IRGENDEINE GARANTIE, sogar ohne die implizite Garantie der MARKTREIFE oder der VERWENDBARKEIT FÜR EINEN
BESTIMMTEN ZWECK.

Die Nutzung dieser Software erfolgt auf eigenes Risiko. Der Author dieser Software kann für eventuell
auftretende Folgeschäden nicht haftbar gemacht werden!
