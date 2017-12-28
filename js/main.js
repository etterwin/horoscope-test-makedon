'use strict';

mbc.project = 106056;
mbc.land = 1026;
mbc.extend({
    land : location.href,
    lang : 'mk',
    project: mbc.project
});
mbc.tag("010 Открытие главной страницы");
mbc.footer({ container: '#js-mobico-terms'});

var click2sms = document.querySelector('.mbc-click2sms');

click2sms.addEventListener('click', function () { mbc.tag('051 Нажатие кнопки ClickToSMS') })
if (mbc.tools.platform() === 'desktop') {
    click2sms.style.display = 'none';
} else {
    click2sms.style.display = 'block';
}

var startSubscription = function () {
    mbc.tag('040 Попытка создания префилда - PRE');
}




