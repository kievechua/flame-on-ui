Package.describe({
    summary: 'Angular-ui package for meteorite.'
});

Package.on_use(function (api) {
    // Dependencies
    // Dependencies css
    api.add_files('components/angular-ui/build/angular-ui.min.css', 'client');

    // Dependencies js
    api.add_files('components/angular-ui/build/angular-ui.min.js', 'client');
    api.add_files('components/angular-ui/build/angular-ui-ieshiv.min.js', 'client');
});