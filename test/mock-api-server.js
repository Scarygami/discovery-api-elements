(function (global) {
  'use strict';
  global.createMockApiServer = function () {
    var responseHeaders = {
      json: {'Content-Type': 'application/json'},
      plain: {'Content-Type': 'text/plain'}
    };

    var server = global.sinon.fakeServer.create();

    server.autoRespond = true;

    server.respondWith(
      'GET',
      'test-v1.json',
      [
        200,
        responseHeaders.json,
        JSON.stringify({
          'mock': true,
          'kind': 'discovery#restDescription',
          'discoveryVersion': 'v1',
          'id': 'test:v1',
          'name': 'test',
          'version': 'v1',
          'title': 'Test API',
          'description': 'API to test discovery-api-elements',
          'protocol': 'rest',
          'baseUrl': 'https://www.example.com/test/v1/',
          'basePath': '/test/v1/',
          'rootUrl': 'https://www.example.com/',
          'servicePath': 'test/v1/',
          'batchPath': 'batch',
          'parameters': {
            'alt': {
              'type': 'string',
              'description': 'Data format for the response.',
              'default': 'json',
              'enum': [
                'json'
              ],
              'enumDescriptions': [
                'Responses with Content-Type of application/json'
              ],
              'location': 'query'
            },
            'fields': {
              'type': 'string',
              'description': 'Selector specifying which fields to include in a partial response.',
              'location': 'query'
            },
            'key': {
              'type': 'string',
              'description': 'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
              'location': 'query'
            },
            'oauth_token': {
              'type': 'string',
              'description': 'OAuth 2.0 token for the current user.',
              'location': 'query'
            },
            'prettyPrint': {
              'type': 'boolean',
              'description': 'Returns response with indentations and line breaks.',
              'default': 'true',
              'location': 'query'
            },
            'quotaUser': {
              'type': 'string',
              'description': 'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.',
              'location': 'query'
            },
            'userIp': {
              'type': 'string',
              'description': 'IP address of the site where the request originates. Use this if you want to enforce per-user limits.',
              'location': 'query'
            }
          },
          'schemas': {
            'Test': {
             'id': 'Test',
             'type': 'object',
             'description': 'Test object.',
             'properties': {
                'testBoolean': {
                  'type': 'boolean',
                  'description': 'Test boolean.'
                },
                'testString': {
                  'type': 'string',
                  'description': 'Test string.'
                }
              }
            }
          },
          'resources': {
            'test': {
              'methods': {
                'post': {
                  'id': 'test.test.post',
                  'path': 'test',
                  'httpMethod': 'POST',
                  'description': 'Creates a new test object.',
                  'parameters': {
                    'testParameter1': {
                      'type': 'boolean',
                      'description': 'Test parameter 1',
                      'default': 'false',
                      'location': 'query'
                    },
                    'testParameter12': {
                      'type': 'string',
                      'description': 'Test parameter 2',
                      'location': 'query'
                    }
                  },
                  'request': {
                    '$ref': 'Test'
                  },
                  'response': {
                    '$ref': 'Test'
                  },
                  'supportsMediaUpload': true,
                  'mediaUpload': {
                    'accept': [
                      '*/*'
                    ],
                    'protocols': {
                      'simple': {
                        'multipart': true,
                        'path': '/upload/test/v1/test'
                      }
                    }
                  },
                  'supportsSubscription': true
                },
                'get': {
                  'id': 'test.test.get',
                  'path': 'test/{testId}',
                  'httpMethod': 'GET',
                  'description': 'Gets a test object.',
                  'parameters': {
                    'testParameter1': {
                      'type': 'boolean',
                      'description': 'Test parameter 1',
                      'default': 'false',
                      'location': 'query'
                    },
                    'testParameter12': {
                      'type': 'string',
                      'description': 'Test parameter 2',
                      'location': 'query'
                    },
                    'testId': {
                     'type': 'string',
                     'description': 'The ID of the file.',
                     'required': true,
                     'location': 'path'
                    }
                  },
                  'parameterOrder': [
                    'testId'
                  ],
                  'response': {
                    '$ref': 'Test'
                  }
                },
                'list': {
                  'id': 'test.test.list',
                  'path': 'test',
                  'httpMethod': 'GET',
                  'description': 'Lists test objects.',
                  'parameters': {
                    'testParameter1': {
                      'type': 'boolean',
                      'description': 'Test parameter 1',
                      'default': 'false',
                      'location': 'query'
                    },
                    'testParameter12': {
                      'type': 'string',
                      'description': 'Test parameter 2',
                      'location': 'query'
                    }
                  },
                  'response': {
                    '$ref': 'TestList'
                  }
                }
              }
            }
          }
        })
      ]
    );

    return server;
  };
}(this));