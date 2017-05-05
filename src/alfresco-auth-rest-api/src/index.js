/**
 * Alfresco Content Services REST API
 * **Authentication API**  Provides access to the authentication features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient', './model/Error', './model/ErrorError', './model/Ticket', './model/TicketBody', './model/TicketEntry', './model/ValidTicket', './model/ValidTicketEntry', './api/AuthenticationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./model/Error'), require('./model/ErrorError'), require('./model/Ticket'), require('./model/TicketBody'), require('./model/TicketEntry'), require('./model/ValidTicket'), require('./model/ValidTicketEntry'), require('./api/AuthenticationApi'));
  }
}(function(ApiClient, Error, ErrorError, Ticket, TicketBody, TicketEntry, ValidTicket, ValidTicketEntry, AuthenticationApi) {
  'use strict';

  /**
   * Provides access to the Authentication features of Alfresco.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoAuthRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoAuthRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoAuthRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AlfrescoAuthRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoAuthRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError: ErrorError,
    /**
     * The Ticket model constructor.
     * @property {module:model/Ticket}
     */
    Ticket: Ticket,
    /**
     * The TicketBody model constructor.
     * @property {module:model/TicketBody}
     */
    TicketBody: TicketBody,
    /**
     * The TicketEntry model constructor.
     * @property {module:model/TicketEntry}
     */
    TicketEntry: TicketEntry,
    /**
     * The ValidTicket model constructor.
     * @property {module:model/ValidTicket}
     */
    ValidTicket: ValidTicket,
    /**
     * The ValidTicketEntry model constructor.
     * @property {module:model/ValidTicketEntry}
     */
    ValidTicketEntry: ValidTicketEntry,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi
  };

  return exports;
}));
