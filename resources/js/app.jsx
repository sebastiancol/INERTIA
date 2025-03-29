//import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

// Layout global opcional
import MainLayout from '@/Layouts/MainLayout';


createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
        //let page = pages [`./Pages/${name}.jsx`];
        //page.default.layout = page.default.layout || ((page)=><MainLayout>{page}</MainLayout>);
        //return page;
        pages.layout = pages.layout || ((pages) => <MainLayout>{pages}</MainLayout>);
        return pages[`./Pages/${name}.jsx`]
      },
    setup({ el, App, props }) {
      
        createRoot(el).render(<App {...props} />);     
    },
});
