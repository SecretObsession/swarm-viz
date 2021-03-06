( () => {
    class SettingsDirective {
        constructor() {
            this.templateUrl = '/dist/html/settings.html';
            this.restrict = 'E';
            this.replace = true;
            this.controller = 'SettingsController';
            this.controllerAs = 'settings'
        }
    }

    register( 'swarm-viz.directives' )
        .directive( 'settings', SettingsDirective );
} )();
