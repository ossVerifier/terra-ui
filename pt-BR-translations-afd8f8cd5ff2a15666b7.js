(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{3511:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.messages=a.locale=a.areTranslationsLoaded=void 0;var o,t=r(130),i=r(3518),n=(o=i)&&o.__esModule?o:{default:o};(0,t.addLocaleData)(n.default);a.areTranslationsLoaded=!0,a.locale="pt-BR",a.messages={"Terra.actionHeader.back":"Voltar","Terra.actionHeader.close":"Fechar","Terra.actionHeader.maximize":"Maximizar","Terra.actionHeader.minimize":"Minimizar","Terra.actionHeader.next":"Avançar","Terra.actionHeader.previous":"Anterior","Terra.ajax.error":"Falha ao carregar conteúdo.","Terra.alert.advisory":"Informe.","Terra.alert.alert":"Alerta.","Terra.alert.dismiss":"Ignorar","Terra.alert.error":"Erro.","Terra.alert.info":"Informações.","Terra.alert.success":"Êxito.","Terra.alert.warning":"Aviso.","Terra.application.tabs.more":"Mais","Terra.application.utility.back":"Voltar","Terra.application.utility.button":"Botão utilidade","Terra.application.utility.close":"Fechar","Terra.application.utility.menu":"Menu utilidade","Terra.applicationLayout.applicationHeader.menuToggleLabel":"Alternar menu","Terra.applicationLayout.utilityDefaults.about":"Sobre","Terra.applicationLayout.utilityDefaults.appearance":"Aparência","Terra.applicationLayout.utilityDefaults.changePhoto":"Alterar foto","Terra.applicationLayout.utilityDefaults.gettingStarted":"Primeiros passos","Terra.applicationLayout.utilityDefaults.help":"Ajuda","Terra.applicationLayout.utilityDefaults.logOut":"Logoff","Terra.applicationLayout.utilityDefaults.menu":"Menu","Terra.applicationLayout.utilityDefaults.security":"Segurança","Terra.applicationLayout.utilityDefaults.settings":"Configurações","Terra.applicationLayout.utilityDefaults.termsOfUse":"Termos de uso","Terra.applicationLayout.utilityDefaults.userInformation":"Informações do usuário","Terra.collapsibleMenuView.more":"Mais","Terra.datePicker.dateFormat":"DD/MM/AAAA","Terra.datePicker.openCalendar":"Calendário aberto","Terra.datePicker.today":"Hoje","Terra.dateTimePicker.timeClarification.button.daylightSaving":"Antes (horário de verão)","Terra.dateTimePicker.timeClarification.button.standardTime":"Depois (horário padrão)","Terra.dateTimePicker.timeClarification.message":"O horário selecionado ocorre durante a transição do horário de verão para horário padrão. Deseja salvar antes ou depois da transição do horário de verão para horário padrão?","Terra.dateTimePicker.timeClarification.title":"Normalização do horário","Terra.demographicsBanner.dateOfBirth":"DN","Terra.demographicsBanner.deceased":"Óbito","Terra.demographicsBanner.gestationalAge":"IG","Terra.demographicsBanner.noDataProvided":"--","Terra.demographicsBanner.postMenstrualAge":"IPM","Terra.dialog.close":"Fechar","Terra.form.field.optional":"(facultatif)","Terra.form.select.add":'Adicionar "{text}"',"Terra.form.select.defaultDisplay":"- Selecione -","Terra.form.select.noResults":'Não há resultados para "{text}"',"Terra.menu.back":"Voltar","Terra.menu.close":"Fechar","Terra.notification.dialog.alert":"Alert","Terra.notification.dialog.error":"Error","Terra.notification.dialog.info":"Information","Terra.notification.dialog.success":"Success","Terra.notification.dialog.warning":"Warning","Terra.onsetPicker.agePrecisionMonth":"Mês(ses)","Terra.onsetPicker.agePrecisionWeek":"Semana(s)","Terra.onsetPicker.agePrecisionYear":"Ano(s)","Terra.onsetPicker.april":"Abril","Terra.onsetPicker.august":"Agosto","Terra.onsetPicker.december":"Dezembro","Terra.onsetPicker.february":"Fevereiro","Terra.onsetPicker.granularityAge":"Idade","Terra.onsetPicker.granularityDate":"Date","Terra.onsetPicker.granularityMonth":"Mês","Terra.onsetPicker.granularityYear":"Ano","Terra.onsetPicker.january":"Janeiro","Terra.onsetPicker.july":"Julho","Terra.onsetPicker.june":"Junho","Terra.onsetPicker.march":"Março","Terra.onsetPicker.may":"Maio","Terra.onsetPicker.november":"Novembro","Terra.onsetPicker.october":"Outubro","Terra.onsetPicker.precisionAbout":"Sobre","Terra.onsetPicker.precisionAfter":"Após","Terra.onsetPicker.precisionBefore":"Antes","Terra.onsetPicker.precisionOnAt":"Em","Terra.onsetPicker.precisionUnknown":"Desconhecido","Terra.onsetPicker.september":"Setembro","Terra.Overlay.loading":"Loading...","Terra.searchField.search":"Search","Terra.status-view.error":"Erro","Terra.status-view.no-data":"Sem resultados","Terra.status-view.no-matching-results":"Não há resultados correspondentes","Terra.status-view.not-authorized":"Não autorizado","Terra.tabs.more":"Mais","Terra.timeInput.am":"","Terra.timeInput.hh":"HH","Terra.timeInput.hours":"Horas","Terra.timeInput.minutes":"Minutos","Terra.timeInput.mm":"mm","Terra.timeInput.pm":""}},3518:function(e,a,r){e.exports=function(){"use strict";return[{locale:"pt",pluralRuleFunction:function(e,a){var r=String(e).split(".")[0];return a?"other":0==r||1==r?"one":"other"},fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"em {0} ano",other:"em {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"em {0} mês",other:"em {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"em {0} dia",other:"em {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"em {0} hora",other:"em {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"em {0} minuto",other:"em {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"em {0} segundo",other:"em {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}}}},{locale:"pt-AO",parentLocale:"pt-PT"},{locale:"pt-PT",parentLocale:"pt",fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"dentro de {0} ano",other:"dentro de {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"dentro de {0} mês",other:"dentro de {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"dentro de {0} dia",other:"dentro de {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}}}},{locale:"pt-CH",parentLocale:"pt-PT"},{locale:"pt-CV",parentLocale:"pt-PT"},{locale:"pt-GQ",parentLocale:"pt-PT"},{locale:"pt-GW",parentLocale:"pt-PT"},{locale:"pt-LU",parentLocale:"pt-PT"},{locale:"pt-MO",parentLocale:"pt-PT"},{locale:"pt-MZ",parentLocale:"pt-PT"},{locale:"pt-ST",parentLocale:"pt-PT"},{locale:"pt-TL",parentLocale:"pt-PT"}]}()}}]);
//# sourceMappingURL=pt-BR-translations-afd8f8cd5ff2a15666b7.js.map