(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{3513:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.messages=r.locale=r.areTranslationsLoaded=void 0;var t,i=a(130),n=a(3519),o=(t=n)&&t.__esModule?t:{default:t};(0,i.addLocaleData)(o.default);r.areTranslationsLoaded=!0,r.locale="sv-SE",r.messages={"Terra.actionHeader.back":"Tillbaka","Terra.actionHeader.close":"Stäng","Terra.actionHeader.maximize":"Maximera","Terra.actionHeader.minimize":"Minimera","Terra.actionHeader.next":"Nästa","Terra.actionHeader.previous":"Föregående","Terra.ajax.error":"Innehållet lästes inte in.","Terra.alert.advisory":"Rådgivning.","Terra.alert.alert":"Avisering.","Terra.alert.dismiss":"Avfärda","Terra.alert.error":"Fel.","Terra.alert.info":"Information.","Terra.alert.success":"Klar.","Terra.alert.warning":"Varning.","Terra.application.tabs.more":"Mer","Terra.application.utility.back":"Tillbaka","Terra.application.utility.button":"Knappen Hjälpmedel","Terra.application.utility.close":"Stäng","Terra.application.utility.menu":"Menyn Hjälpmedel","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Växla meny","Terra.applicationLayout.utilityDefaults.about":"Om","Terra.applicationLayout.utilityDefaults.appearance":"Utseende","Terra.applicationLayout.utilityDefaults.changePhoto":"Byt bild","Terra.applicationLayout.utilityDefaults.gettingStarted":"Kom igång","Terra.applicationLayout.utilityDefaults.help":"Hjälp","Terra.applicationLayout.utilityDefaults.logOut":"Logga ut","Terra.applicationLayout.utilityDefaults.menu":"Meny","Terra.applicationLayout.utilityDefaults.security":"Säkerhet","Terra.applicationLayout.utilityDefaults.settings":"Inställningar","Terra.applicationLayout.utilityDefaults.termsOfUse":"Användningsvillkor","Terra.applicationLayout.utilityDefaults.userInformation":"Användaruppgifter","Terra.collapsibleMenuView.more":"Mer","Terra.datePicker.dateFormat":"DD/MM/ÅÅÅÅ","Terra.datePicker.openCalendar":"Öppna kalender","Terra.datePicker.today":"I dag","Terra.dateTimePicker.timeClarification.button.daylightSaving":"Före (som sommartid)","Terra.dateTimePicker.timeClarification.button.standardTime":"Efter (som vintertid)","Terra.dateTimePicker.timeClarification.message":"Tiden som valts inträffar vid övergång från sommartid till vintertid. Vill du att tiden ska anges som sommartid eller vintertid?","Terra.dateTimePicker.timeClarification.title":"Tidsförklaring","Terra.demographicsBanner.dateOfBirth":"Födelsedatum","Terra.demographicsBanner.deceased":"Avliden","Terra.demographicsBanner.gestationalAge":"GA","Terra.demographicsBanner.noDataProvided":"--","Terra.demographicsBanner.postMenstrualAge":"PMA","Terra.dialog.close":"Stäng","Terra.form.field.optional":"(valfri)","Terra.form.select.add":'Lägg till "{text}"',"Terra.form.select.defaultDisplay":"- Välj -","Terra.form.select.noResults":'Inga matchande resultat för "{text}"',"Terra.menu.back":"Tillbaka","Terra.menu.close":"Close","Terra.notification.dialog.alert":"Avisering","Terra.notification.dialog.error":"Fel","Terra.notification.dialog.info":"Information","Terra.notification.dialog.success":"Klar","Terra.notification.dialog.warning":"Varning","Terra.onsetPicker.agePrecisionMonth":"Månader","Terra.onsetPicker.agePrecisionWeek":"Veckor","Terra.onsetPicker.agePrecisionYear":"År","Terra.onsetPicker.april":"april","Terra.onsetPicker.august":"augusti","Terra.onsetPicker.december":"december","Terra.onsetPicker.february":"februari","Terra.onsetPicker.granularityAge":"Ålder","Terra.onsetPicker.granularityDate":"Datum","Terra.onsetPicker.granularityMonth":"Månad","Terra.onsetPicker.granularityYear":"År","Terra.onsetPicker.january":"januari","Terra.onsetPicker.july":"juli","Terra.onsetPicker.june":"juni","Terra.onsetPicker.march":"mars","Terra.onsetPicker.may":"maj","Terra.onsetPicker.november":"november","Terra.onsetPicker.october":"oktober","Terra.onsetPicker.precisionAbout":"Handla om","Terra.onsetPicker.precisionAfter":"Efter","Terra.onsetPicker.precisionBefore":"Innan","Terra.onsetPicker.precisionOnAt":"På/På","Terra.onsetPicker.precisionUnknown":"Okänd","Terra.onsetPicker.september":"september","Terra.Overlay.loading":"Läser in ...","Terra.searchField.search":"Sök","Terra.status-view.error":"Fel","Terra.status-view.no-data":"Inga resultat","Terra.status-view.no-matching-results":"Inga resultat matchar sökvillkoren","Terra.status-view.not-authorized":"Behörighet saknas","Terra.tabs.more":"Mer","Terra.timeInput.am":"fm","Terra.timeInput.hh":"hh","Terra.timeInput.hours":"Timmar","Terra.timeInput.minutes":"Minuter","Terra.timeInput.mm":"mm","Terra.timeInput.pm":"em"}},3519:function(e,r,a){e.exports=function(){"use strict";return[{locale:"sv",pluralRuleFunction:function(e,r){var a=String(e).split("."),t=!a[1],i=Number(a[0])==e,n=i&&a[0].slice(-1),o=i&&a[0].slice(-2);return r?1!=n&&2!=n||11==o||12==o?"other":"one":1==e&&t?"one":"other"},fields:{year:{displayName:"år",relative:{0:"i år",1:"nästa år","-1":"i fjol"},relativeTime:{future:{one:"om {0} år",other:"om {0} år"},past:{one:"för {0} år sedan",other:"för {0} år sedan"}}},month:{displayName:"månad",relative:{0:"denna månad",1:"nästa månad","-1":"förra månaden"},relativeTime:{future:{one:"om {0} månad",other:"om {0} månader"},past:{one:"för {0} månad sedan",other:"för {0} månader sedan"}}},day:{displayName:"dag",relative:{0:"i dag",1:"i morgon",2:"i övermorgon","-2":"i förrgår","-1":"i går"},relativeTime:{future:{one:"om {0} dag",other:"om {0} dagar"},past:{one:"för {0} dag sedan",other:"för {0} dagar sedan"}}},hour:{displayName:"timme",relative:{0:"denna timme"},relativeTime:{future:{one:"om {0} timme",other:"om {0} timmar"},past:{one:"för {0} timme sedan",other:"för {0} timmar sedan"}}},minute:{displayName:"minut",relative:{0:"denna minut"},relativeTime:{future:{one:"om {0} minut",other:"om {0} minuter"},past:{one:"för {0} minut sedan",other:"för {0} minuter sedan"}}},second:{displayName:"sekund",relative:{0:"nu"},relativeTime:{future:{one:"om {0} sekund",other:"om {0} sekunder"},past:{one:"för {0} sekund sedan",other:"för {0} sekunder sedan"}}}}},{locale:"sv-AX",parentLocale:"sv"},{locale:"sv-FI",parentLocale:"sv"}]}()}}]);
//# sourceMappingURL=sv-SE-translations-a04ee530f165b810e455.js.map