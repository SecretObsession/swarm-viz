( () => {
    'use strict'

    class CompactContainerDirective {
        constructor() {
            this.templateUrl = '/app/container/compact-container.html';
            this.restrict = 'E';
            this.replace = true;
            this.controller = 'ContainerController';
            this.controllerAs = 'container'
            this.bindToController = true;
            this.scope = {
                container: '='
            };
        }
    }

    register( 'swarm-viz.directives' )
        .directive( 'compactContainer', CompactContainerDirective );
} )();