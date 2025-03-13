import {} from './bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
//import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Layout global opcional
//import MainLayout from '@/Layouts/MainLayout';
//import {User} from '@/Pages/User.jsx'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
      },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});
