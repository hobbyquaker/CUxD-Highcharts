# CUxD-Highcharts 1.2

Zusatzsoftware f�r die HomeMatic CCU um CUxD DEVLOGS mit Highcharts zu visualisieren

## Installation

### Als Zusatzsoftware

Im HomeMatic WebUI cuxchart.tar.gz als Zusatzsoftware installieren. Download �ber http://homematic-inside.de

### Per FTP/SCP
(Vorteil: kein Zwangsreboot der CCU, Nachteil: die Software taucht nicht in der Liste der installierten Zusatzsoftware auf und l�sst sich dort auch nicht deinstallieren)

Den Ordner cuxchart aus dem Zip-File https://github.com/hobbyquaker/CUxD-Highcharts/archive/master.zip auf die CCU nach /www/addons/ kopieren. Zum deinstallieren einfach l�schen.



## Verwendung

* http://ccu/addons/cuxchart/ aufrufen

CUxD-Highcharts liest das Config-File des CUxD aus und findet so das Logfile. Es ist daher keine Konfiguration notwendig.

Wie das Ger�te-Logging des CUxD eingerichtet wird ist im CUxD-Handbuch Kapitel 8 beschrieben.
Der Parameter DEVTIMEFORMAT muss auf seinem Default-Wert %Y-%m-%dT%X bleiben.

## Changelog

### 1.2
* Verwendung von Highstock
* Unterst�tzung von DEVLOGMOVE
* Ausgew�hlte Graphen werden im LocalStorage des Browsers gespeichert und beim n�chsten Seitenaufruf autom. wieder ausgew�hlt
* Statt Datenpunkt-Bezeichnern werden in der Legende nun Kanalnamen gefolgt vom HssType und der Einheit angezeigt
* Lade-Seite mit M�glichkeit das Laden der Logfiles abzubrechen
* F�r unterschiedliche Datenpunkttypen werden nun passende Graphen-Typen ausgew�hlt

### 1.1
* diverse Fehler behoben

### 1.0
* Erstes �ffentliches Release

## ToDo

* Maximale Anzahl an Logeintr�gen herausexperimentieren :)
* �ber Querystring steuerbar machen: Anzeigte Datenreihen, Anzeige der Legende, Anzeige des Navigators
* Tooltip bei Graphentyp Scatter (Datenpunkte PRESS_LONG, PRESS_SHORT, MOTION) korrigieren (Zeit-Formatierung)
* Unter Titel durchschn. Log-Eintr�ge pro Minute anzeigen
* Fehler beheben: 1. Datenreihe wird immer wieder selektiert...


## Copyright, Lizenz, Bedingungen

Copyright (c) 2013 hobbyquaker https://github.com/hobbyquaker
Lizenz: CC BY-NC 3.0 http://creativecommons.org/licenses/by-nc/3.0/de/

Sie d�rfen:

 * das Werk bzw. den Inhalt vervielf�ltigen, verbreiten und �ffentlich zug�nglich machen
 * Abwandlungen und Bearbeitungen des Werkes bzw. Inhaltes anfertigen

Zu den folgenden Bedingungen:

 * Namensnennung - Sie m�ssen den Namen des Autors/Rechteinhabers in der von ihm festgelegten Weise nennen.
 * Keine kommerzielle Nutzung ? Dieses Werk bzw. dieser Inhalt darf nicht f�r kommerzielle Zwecke verwendet werden.

Wobei gilt:

 * Verzichtserkl�rung - Jede der vorgenannten Bedingungen kann aufgehoben werden, sofern Sie die ausdr�ckliche
 * Einwilligung des Rechteinhabers dazu erhalten.


Die Ver�ffentlichung dieser Software erfolgt in der Hoffnung, da� sie Ihnen von Nutzen sein wird, aber
OHNE IRGENDEINE GARANTIE, sogar ohne die implizite Garantie der MARKTREIFE oder der VERWENDBARKEIT F�R EINEN
BESTIMMTEN ZWECK.

Die Nutzung dieser Software erfolgt auf eigenes Risiko. Der Author dieser Software kann f�r eventuell
auftretende Folgesch�den nicht haftbar gemacht werden!