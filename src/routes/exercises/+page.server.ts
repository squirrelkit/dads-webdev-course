import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

const pagesDirectory =  path.join(process.cwd(), './src/routes/exercises');

const pages = fs.readdirSync(pagesDirectory).filter(file => {
    return fs.statSync(path.join(pagesDirectory, file)).isDirectory();
});

export const load = (async () => {
    return {
        props: {
            pages
        }
    };
}) satisfies PageServerLoad;