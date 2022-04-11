'use strict';


/**
 * Get Event Logs
 * *** The GraphQl query for this endpoint is: ``` graphql query MyQuery {   t_event_logs_v1(where: {}) {     block     caller     caller_time     canister_id     event_key     event_value     type   } } ```
 *
 * xHasuraAdminSecret String Your x-hasura-admin-secret will be used for authentication of the API request. (optional)
 * returns inline_response_200
 **/
exports.apiRestEventGET = function(xHasuraAdminSecret) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "t_event_logs_v1" : [ {
    "caller_time" : "",
    "caller" : "caller",
    "canister_id" : "canister_id",
    "block" : "",
    "type" : "type",
    "event_value" : "event_value",
    "event_key" : "event_key"
  }, {
    "caller_time" : "",
    "caller" : "caller",
    "canister_id" : "canister_id",
    "block" : "",
    "type" : "type",
    "event_value" : "event_value",
    "event_key" : "event_key"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

