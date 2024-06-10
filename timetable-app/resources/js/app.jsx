// resources/js/app.jsx

import { createInertiaApp } from "@inertiajs/inertia-react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

// Mapping of component names to modules
const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });

createInertiaApp({
    resolve: (name) => {
        const importPage = pages[`./Pages/${name}.jsx`];
        if (!importPage) {
            throw new Error(
                `Unknown page ${name}. Make sure the page is statically imported.`
            );
        }
        return importPage.default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
});
