/**
 *      CUxD-Highcharts Konfigurations-Datei
 *
 *      visualisiert CUxD Geräte-Logs mittels Highcharts
 *
 *      Copyright (c) 2013 hobbyquaker https://github.com/hobbyquaker
 *
 *      Lizenz: CC BY-NC 3.0 http://creativecommons.org/licenses/by-nc/3.0/de/
 *
 *      Sie dürfen:
 *          das Werk bzw. den Inhalt vervielfältigen, verbreiten und öffentlich zugänglich machen
 *          Abwandlungen und Bearbeitungen des Werkes bzw. Inhaltes anfertigen
 *      Zu den folgenden Bedingungen:
 *          Namensnennung - Sie müssen den Namen des Autors/Rechteinhabers in der von ihm festgelegten Weise nennen.
 *          Keine kommerzielle Nutzung - Dieses Werk bzw. dieser Inhalt darf nicht für kommerzielle Zwecke verwendet
 *          werden.
 *      Wobei gilt:
 *          Verzichtserklärung - Jede der vorgenannten Bedingungen kann aufgehoben werden, sofern Sie die ausdrückliche
 *          Einwilligung des Rechteinhabers dazu erhalten.
 *
 *      Die Veröffentlichung dieser Software erfolgt in der Hoffnung, daß sie Ihnen von Nutzen sein wird, aber
 *      OHNE IRGENDEINE GARANTIE, sogar ohne die implizite Garantie der MARKTREIFE oder der VERWENDBARKEIT FÜR EINEN
 *      BESTIMMTEN ZWECK.
 *
 *      Die Nutzung dieser Software erfolgt auf eigenes Risiko. Der Author dieser Software kann für eventuell
 *      auftretende Folgeschäden nicht haftbar gemacht werden!
 *
 */

cuxchart.config = {
    "series": {
        "ACTUAL_HUMIDITY": {
            valueDecimals: 1,
            type: "spline"
        },
        "ACTUAL_TEMPERATURE": {
            valueDecimals: 1,
            type: "spline"
        },
        "SET_TEMPERATURE": {
            marker: {
                enabled: true
            },
            valueDecimals: 1,
            type: "line",
            step: "left",
            grouping: {
                enabled: false
            }
        },
        "SETPOINT": {
            marker: {
                enabled: true
            },
            valueDecimals: 1,
            type: "line",
            step: "left",
            grouping: {
                enabled: false
            }
        },
        "STATE": {
            type: "line",
            step: "left",
            grouping: {
                enabled: false
            }
        },
        "CUX0600101:1.MEAN5MINUTES": {
            type: "areaspline"
        }
    }
};
