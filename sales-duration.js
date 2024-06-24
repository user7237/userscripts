// ==UserScript==
// @name         Автоматическая установка продажи до окончания мероприятия
// @namespace    http://tampermonkey.net/
// @version      2024-06-24
// @description  try to take over the world!
// @author       You
// @match        https://kras.kassy.ru/admin/event/*
// @icon         https://kras.kassy.ru/favicon-32x32.png
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