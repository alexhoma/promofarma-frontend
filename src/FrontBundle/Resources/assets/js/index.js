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