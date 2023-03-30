import React from 'react';
import { Router } from './Router';

export const Layout: React.FunctionComponent = () => {
    return (
        <div>
            <main>
                <span>----Layout Frame-----</span>
                <Router />
            </main>
        </div>
    )
}