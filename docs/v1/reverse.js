export const paths = {
    '/reverse/calculate/{latlng}': {
        'get': {
            'tags': [
                'reverse'
            ],
            'summary': 'Base reverse service',
            'description': 'Get user friendly formatted address base on requested latitude and longitude',
            'operationId': 'reverseByLatLng',
            'produces': [
                'application/json'
            ],
            'parameters': [{
                'name': 'latlng',
                'in': 'path',
                'description': 'Latitude and Longitude seperated by comma',
                'required': true,
                'type': 'string'
            }],
            'responses': {
                '200': {
                    'description': 'successful operation',
                    'schema': {
                        'type': 'array',
                        'items': {
                            '$ref': '#/definitions/Order'
                        }
                    }
                },
                '400': {
                    'description': 'Invalid lat,lng input parameter'
                }
            }
        }
    },
};
export const definitions = {
    'Order': {
        'type': 'object',
        'properties': {
          'id': {
            'type': 'integer',
            'format': 'int64'
          },
          'petId': {
            'type': 'integer',
            'format': 'int64'
          },
          'quantity': {
            'type': 'integer',
            'format': 'int32'
          },
          'shipDate': {
            'type': 'string',
            'format': 'date-time'
          },
          'status': {
            'type': 'string',
            'description': 'Order Status',
            'enum': [
              'placed',
              'approved',
              'delivered'
            ]
          },
          'complete': {
            'type': 'boolean',
            'default': false
          }
        },
        'xml': {
          'name': 'Order'
        }
      },
};