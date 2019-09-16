﻿# Сервис за мониторинг на активноста во ЈУ Градска Библиотека „Браќа Миладиновци“ - Скопје - Тема 62

### Тим

Овој проект е изработен при Факултетот за Информатички Науки и Компјутерско Инженерство - Скопје, по предметот Кориснички Интерфејси, од страна на студентите:
	1. Филип Брсјак - 151145
	2. Давор Ѓорѓиевски - 152049
	3. Ангела Велковска - 151069

 

### Идеја

Присуството во читална, особено пред/во испитна сесија, е секојдневие на студентите. Поради малите капацитети на читалните истите со соочуват со недостиг на доволен број на места за студентите, па така често се случува еден студент да патува и до триесет минути за да стигне во читалната и кога ќе стигне да нема слободно место. Во тој случај, студентот е приморан да чека се додека не се ослободи место.

Поттикнати од овој проблем, кој не засега и нас лично, решивме да направиме веб сервис кој ќе ја следи активноста на ЈУ Градска Библиотека „Браќа Миладиновци“ - Скопје, поточно активноста во читалните. 

Сервисот/апликацијата може да ја спуштите(download) на вашата локална машина и локално да ја хостирате.

Оваа идеја припаѓа исклучиво на горенаведените членови на тимот и било какво копирање/реплицирање на идејата или сервисот ќе се смета за крајно неколегијално и неодговорно и во тој случај ќе ги употреби сите законски и правни мерки.

### Процес на развивање

Сервисот е напишан со помош на: HTML5, CSS3, Bootstrap4, Font Awesome 5m JavaScript и jQuery. Кодот во ова репо е единствениот код за сервисот достапен онлајн. Развиен е 100% од страна на тимот без никаква помош од останати лица/компании или факултетот. Функционалностите кои се наведени подолу се пример за функциите кои ги има сервисот и притоа треба да се земе во предвид дека ова е само „симулација“ на реален проект.

### Почетна страна

Со пристапувањето до index.html фајлот се пристапува до Landing Page/Home Page. Во горниот дел на екранот се сместени две менија, првото со икони од социјални мрежи како и линк до Log In/Sign Up страна, второто е main-menu. Во главниот дел на екранот се гледа каросела со три слајдови и краток текст. Под кароселата следува делот „Мисија и Визија“ каде што во куси црти се опишани дејностите на јавната установа. Потоа следува делот „Најнови Наслови“ и на крај футерот. Футерот е поделен на три колони и содржи краток текст за установата, колона со корисни линкови и мапа со локација на установата.

### Логирајте Се/Зачленете Се

Со кликање на опцијата Логирајте Се/Зачленете Се се пристапува до формуларот за најава или регистрација. Формуларот за најава дава можност постојаните корисници да се најават или новите корисници да се зачленат во системот. Формуларот иста така прави проверка на форматот на внесените податоци како и полињата кои се задолжителни. 

При избирање на опцијата Зачлени Се, на екран се појавува нов формулар кој корисникот треба да го пополни со своите лични податоци, а по успешното зачленување корисникот се враќа на првобитниот формулар за Најава и ги внесува е-маил адресата и лозинката.

За да пристапите до делот за корисници (Dashboard), потребно е да креирате нов корисник со валиден формат на е-адреса и валидна лозинка, па потоа најавете се со внесените податоци во системот.(Пример за валиден е-mail: "example@mail.com" ; За лозинката да биде валидна треба да содржи барем една голема буква, барем еден знак и барем една бројка и лозинката не треба е пократка од 6 карактери)


### Dashboard

По успешната најава корисникот пристапува до сопствениот профил. На левата страна од екранот имаме sidebar каде што се прикажани личните податоци на корисникот, а на десната имаме информација за бројот на: слободни, зафатени и резервирани места.

При кликање на копчето Библиотека се прикажуваат сите литературни жанрови кои ги поседува библиотеката.

При избирање на копчето Читална, на корисникот му се понудени четири простории со кои располага читалната. Со избирање на една од просториите, на екранот на корисникот се појавува мапа која ја прикажува состојбата на просторијата во читалната. Црвените места ги претставуваат зафатените места во читалната, портокаловите резервираните, а зелените слободните. Со кликање на едно од слободните места корисникот го резервира своето место во читалната. 

### Дополнување

Доколку ви се допаѓа овој проект, Ве поканување да ни се приклучите со ваши предлози и критики со цел да го развиеме овој сервис до крај.
