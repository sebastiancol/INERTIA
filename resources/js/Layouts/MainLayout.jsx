import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Head, Link } from '@inertiajs/react'

const MainLayout = () => {
    return (
        <>
       
        <div className='container' >
            <Head>
                <title>My app</title>
                <meta head-key="description" name="description" content="This is the default description" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <Link href="/logout" method="post" as="button">Logout</Link>

            <footer>
                <p>@Creado por sebastian moreno</p>
            </footer>

        </div>
        </>
        
            
    );
};

export default MainLayout;
