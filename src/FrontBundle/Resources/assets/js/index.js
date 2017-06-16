/**
 * Promofarma Trends index
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import SearchPage from './Search/SearchPage';
import InsightsPage from "./Insights/InsightsPage";

/**
 * Insights render
 */
if (null !== document.getElementById('react-page-insights')) {
    ReactDOM.render(
        <Main>
            <InsightsPage />
        </Main>,
        document.getElementById('react-page-insights')
    );
}

/**
 * Search engine render
 */
if (null !== document.getElementById('react-page-search')) {
    ReactDOM.render(
        <Main>
            <SearchPage />
        </Main>,
        document.getElementById('react-page-search')
    );
}

/**
 * Menu Scripts
 */
document
    .querySelector('.nav-toggle')
    .addEventListener('click', (event) => {
        let element = event.target.className;
        let menu = document.querySelector('.nav-menu');

        if (element.indexOf('is-active') !== -1) {
            event.target.className = 'nav-toggle';
            menu.className = 'nav-right nav-menu';
        } else {
            event.target.className += ' is-active';
            menu.className += ' is-active';
        }
    });