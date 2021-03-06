( () => {
    class ContainerSearchController {
        /*@ngInject*/
        constructor( dataService ) {
            this.query = "";
            this.results = [];
            this.filterOrder = 'asc';
            this.filterType = "created";
            this._dataService = dataService;
        }

        get filter() {
            return ( ( this.filterOrder === 'desc' ) ? '-' : '' ) + this.filterType;
        }

        search() {
            const containers = this._dataService.containers;
            this.results = containers.filter( c => {
                return ( this.query && ( c.name.toLowerCase()
                    .indexOf( this.query.toLowerCase() ) > -1 ||
                    c.image.toLowerCase()
                    .indexOf( this.query.toLowerCase() ) > -1 ||
                    c.id.toLowerCase()
                    .indexOf( this.query.toLowerCase() ) > -1 ) );
            } );
        }
    }

    register( 'swarm-viz.controllers' )
        .controller( 'ContainerSearchController', ContainerSearchController );
} )();
