import {paths as geoPath,definitions as geoDefs} from './geo';
import {paths as reversePath,definitions as reverseDefs} from './reverse';
const documentation = {
    'swagger': '2.0',
    'info': {
        'description': 'Snapp map service gateway documentation.',
        'version': '1.0.0',
        'title': 'Smap Gateway',
        'termsOfService': 'http://www.snapp.taxi',
        'contact': {
            'email': 'map@snapp.cab'
        }
    },
    'host': 'http://192.168.1.120:9090/api',
    'basePath': '/v1',
    'tags': [{
            'name': 'geo',
            'description': 'Everything about search on map.',

        },
        {
            'name': 'reverse',
            'description': 'Everything about reverse geo code.',

        }
    ],
    'paths': {},
    'definitions':{}
};
for(const key in reversePath) {
    documentation.paths[key] = reversePath[key];
}
for(const key in reverseDefs) {
    documentation.definitions[key] = reverseDefs[key];
}

for(const key in geoPath) {
    documentation.paths[key] = geoPath[key];
}
export default documentation;