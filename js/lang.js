
const mainLink = ".20secondstosun.com"
const ENG = "eng";
const RU = "ru";

var linkDic = {};
linkDic["portfolio_href_1"] = "casa";
linkDic["portfolio_href_2"] = "interactive";
linkDic["portfolio_href_3"] = "experiment";
linkDic["portfolio_href_4"] = "mobile";
linkDic["portfolio_href_5"] = "old";
linkDic["portfolio_href_6"] = "favorites";


var engTxtDic = {};
engTxtDic["portfolio_info_1" + ENG] = "<h3>Archvis</h3><p>Architectural visualization / 2015</p>";
engTxtDic["portfolio_info_2" + ENG] = "<h3>Interactive</h3><p>Physics &amp; Digital / 2013 - 2015</p>";
engTxtDic["portfolio_info_3" + ENG] = "<h3>Experimental</h3><p>Prototypes &amp; Ideas / 2014 - 2015</p>";
engTxtDic["portfolio_info_4" + ENG] = "<h3>Mobile</h3><p>Apps &amp; Games / 2013 - 2014</p>";
engTxtDic["portfolio_info_5" + ENG] = "<h3>Old</h3><p>Flash &amp; Air / 2010 - 2013</p>";
engTxtDic["portfolio_info_6" + ENG] = "<h3>Favorites</h3><p>Best Of / 2010 - 2015</p>";

engTxtDic["portfolio_info_1" + RU] = "<h3>Архвизы</h3><p>Архитектурные визуализации / 2015</p>";
engTxtDic["portfolio_info_2" + RU] = "<h3>Интерактивное</h3><p>Physics &amp; Digital / 2013 - 2015</p>";
engTxtDic["portfolio_info_3" + RU] = "<h3>Экспериментальное</h3><p>Прототипы, Идеи / 2014 - 2015</p>";
engTxtDic["portfolio_info_4" + RU] = "<h3>Мобильное</h3><p>Приложения, Игры / 2013 - 2014</p>";
engTxtDic["portfolio_info_5" + RU] = "<h3>Старое</h3><p>Flash &amp; Air / 2010 - 2013</p>";
engTxtDic["portfolio_info_6" + RU] = "<h3>Избранное</h3><p>Лучшее / 2010 - 2015</p>";

function changeToRus()
{
    document.getElementById('about_text').innerHTML = '<h3>О себе</h3><p>_</p>' +
'<p>Привет, привет! Меня зовут Юрий, я занимаюсь разработкой интерактивных систем, нахожусь в Москве.</p><p>'+
    'На данный момент я работаю в The Family Agency - разрабатываю интерактивные инсталляции, игры и разнообразные активности '+
    ' с использование kinect, leap motion, oculus, arduino, в общем в таком ключе.</p><p>' +
    'Очень сильно интересуюсь следующими вещами:  UI / UX, science, natural interfaces, VR, gamedev, music, generative art, physics (Richard Feiman is only God), методологии разработки ПО. ' +
    'На данный момент в работе использую Cinder и Unreal Engine. Я очень сильно люблю C++ (очень сильно). Иногда приходится использовать actionscript, unity3D.</p><p>' +
     'Также у меня есть персональный <a href="http://blog.20secondstosun.com" target="new">миниблог</a>.</p><p>' +
     'Развернутое и более официальное résumé доступно по <a href="http://blog.20secondstosun.com" target="new">ссылке</a>.</p><p>' +
     'Контакты в соцсетях ниже в футере.</p><p>'+
     'Всегда открыт для интересных проектов и рад знакомству с интересными людьми. Пишите <b>yurikblech@gmail.com</b></p><p>';

    setPortfolioData(RU);  
}

function changeToEng()
{

    document.getElementById('about_text').innerHTML = '<h3>About myself</h3><p>_</p>' +
    '<p>Hi, I\'m Yuri - creative technologist from Moscow. ' +
    'Graduated Moscow State University at 2010. ' +
    'I\’m a programmer at heart, I love being able to express my thoughts in the form of code and have the machine act it out. ' +
    'Programming allows me to bring my ideas to life, to build a world that I can share. ' +
    'I feel that programming is an art form that combines the creativity of writing with the logic of mathematics. ' +
    'I am fluent at C++. C++ is the main language I use and work with. I very much enjoy C++. </p><p>' +
    'Now I\'m making stuff at The Family agency: interactive installations, games and other activities' +
    'with kinect, leap, oculus, arduino and so on. </p><p>' +
    'I like: UI / UX, science, natural interfaces, VR, gamedev, music, generative art, physics (Richard Feiman is only God), ' +
    'program design. Now the main tools that I use in my work are Cinder and Unreal Engine. Rarely - unity3D, actionscript.</p><p>' +
     'Also I has personal <a href="http://blog.20secondstosun.com" target="new">miniblog</a>.</p><p>' +        
     'A copy of my résumé can be found <a href="http://blog.20secondstosun.com" target="new">here</a>.</p><p>' +
     'And all social contacs you can found below at the footer.</p>';

    setPortfolioData(ENG);    
}

function setPortfolioData(key)
{
    for (var i = 1; i < 7; i++) 
    {
        if (i != 1)
        {
            document.getElementById('port_' + i + '_href').href = "http://" + linkDic["portfolio_href_" + i] + "_" + key + mainLink;
            document.getElementById('port_info_' + i).innerHTML = engTxtDic["portfolio_info_" + i + key];            
        }
        else
        {
            document.getElementById('port_' + i + '_href').href = "http://" + linkDic["portfolio_href_" + i]  + mainLink;
            document.getElementById('port_info_' + i).innerHTML = engTxtDic["portfolio_info_" + i + key];
        }
    }
}
