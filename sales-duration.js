// ==UserScript==
// @name         sales-duration
// @namespace    user7237
// @version      0.1
// @author       user7237
// @description  Автоматическая установка продажи до окончания мероприятия
// @match        https://krasbilet.ru/admin/*
// @match        https://*.krasbilet.ru/admin/*
// @match        https://*.kassy.ru/admin/*
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

    function eventSync () {
        const eventCacheable = document.querySelector('#FormCheck_is_cacheable');
        const eventVisible = document.querySelector('#FormCheck_is_visible');
        const eventPublic = document.querySelector('#FormCheck_is_public');
        const buttons = document.querySelectorAll('.btn');
        let syncButton;
        for (let button of buttons) {
            if (button.name === 'event_submit') {
                syncButton = button;
                break;
            }
        }
        if (!syncButton) {
            console.log('button event_submit not found');
            return;
        }
        eventCacheable.checked = true;
        eventVisible.checked = true;
        eventPublic.checked = true;
        syncButton.click();
    }

    function updatePlaces () {
        const button = document.querySelector('#recache_event');
        if (!button) {
            console.log('button recache_event');
            return;
        }
        button.click();
    }

    document.addEventListener('keydown', (e) => {
        if (e.code == 'BracketLeft') {
            console.log('setting sales duration');
            salesDuration();
        }
        if (e.code === 'Numpad1') {
            console.log('setting event sync');
            eventSync();
        }
        if (e.code === 'Numpad2') {
            console.log('updating places');
            updatePlaces();
        }
        if (e.code === 'NumpadEnter') {
            console.log('opening event');
            if (location.href.match("/admin/ts/[0-9]+/repertuar/[0-9]+/")) {
                const sp = location.href.split('/');
                // "/admin/event/3-26983408/"
                sp[4] = 'event';
                sp[5] = `${sp[5]}-${sp[7]}`;
                sp.pop();
                sp.pop();
                sp.pop();
                let link = sp.join('/');
                console.log(`going to ${link}`);
                location.href = link;
            }
        }
    });
})();