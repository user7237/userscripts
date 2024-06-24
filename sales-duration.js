// ==UserScript==
// @name         sales-duration
// @namespace    user7237
// @version      0.1
// @author       user7237
// @description  Автоматическая установка продажи до окончания мероприятия
// @match        https://kras.kassy.ru/admin/event/*
// @icon         https://kras.kassy.ru/favicon-32x32.png
// @updateURL    https://github.com/user7237/userscripts/raw/master/sales-duration.js
// @downloadURL  https://github.com/user7237/userscripts/raw/master/sales-duration.js
// @license      MIT
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function salesDuration () {
        const input = document.querySelector('#ts_duration_sale');
        const submit = document.querySelector('.btn-success');
        if (!input || !submit) {
            console.log('html elements not found');
            return;
        }
        input.checked = true;
        submit.click();
    }
    document.addEventListener('keydown', (e) => {
        if (e.code == 'BracketLeft') {
            console.log('setting sales duration');
            salesDuration();
        }
    });
})();