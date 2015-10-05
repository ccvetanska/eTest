var defaultLanguage = 'bg';
var localeLoaded = false;
var flags;
var i;

function loadLocale() // set default language = 'bg'
{
    if (localeLoaded) {
        return;
    }
    if (!localeLoaded) {
        var lang=getCookie('currentLang')
        if (lang != "") {
            localeLoaded = true;
            changeLang(lang);
        }
        if (lang == "") {
            localeLoaded = true;
            changeLang(defaultLanguage);
        }
    }

};

document.l10n.ready(loadLocale);

function changeLang(lang)   //bg                         // function for the language buttons
{
    document.l10n.requestLocales(lang); // set bg

    flags = document.getElementsByClassName('flag'); 
    for (i = 0; i < flags.length; i++)
    {
        flags[i].style.visibility = "visible"; //make all buts visibile
    }

    flags = document.getElementsByClassName(lang);  // hide the but for bg
    for (i = 0; i < flags.length; i++)
    { 
        flags[i].style.visibility = "hidden";
    }

    setCookie('currentLang', lang, 999999);

}

function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

