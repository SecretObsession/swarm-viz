( () => {
    'use strict'

    let hosts = [],
        networks = [];

    class DataService {
        /*@ngInject*/
        constructor( $rootScope, socketService ) {
            socketService.socket.on( 'containers', data => {
                hosts = data;
                $rootScope.$broadcast( 'DataService.notification.refresh.hosts' );
            } );
            socketService.socket.on( 'networks', data => {
                networks = data;
                $rootScope.$broadcast( 'DataService.notification.refresh.networks' );
            } );
        }

        getHosts() {
            return hosts;
        }

        getContainers() {
            return [].concat.apply( [], hosts.map( h => h.containers ) );
        }

        getNetworks() {
            return networks;
        }

        getNetworkById( id ) {
            return networks.find( n => n.id == id );
        }

        getNetworkByName( name ) {
            return networks.find( n => n.name == name );
        }
    }

    register( 'swarm-viz.services' )
        .service( 'dataService', DataService );
} )();